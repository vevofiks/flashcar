import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import cloudinary from "@/lib/cloudinary";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();

        const name = formData.get("name") as string;
        const description = formData.get("description") as string;
        const category = formData.get("category") as string;
        const image = formData.get("image") as File | string | null;

        if (!name || !description || !category) {
            return NextResponse.json(
                { message: "Missing required fields" },
                { status: 400 }
            );
        }

        let imageUrl: string | null = null;

        if (image instanceof File) {
            // Convert to base64 so Cloudinary accepts it
            const arrayBuffer = await image.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            const base64Image = `data:${image.type};base64,${buffer.toString(
                "base64"
            )}`;

            const uploadRes = await cloudinary.uploader.upload(base64Image, {
                folder: "products", // optional folder in Cloudinary
            });

            imageUrl = uploadRes.secure_url;
        } else if (typeof image === "string" && image) {
            imageUrl = image;
        }

        const client = await clientPromise;
        const db = client.db("flashcar");

        const result = await db.collection("products").insertOne({
            name,
            description,
            category,
            image: imageUrl,
            isBlocked: false,
            createdAt: new Date(),
        });

        return NextResponse.json({
            success: true,
            data: {
                _id: result.insertedId,
                name,
                description,
                category,
                image: imageUrl,
                isBlocked: false,
            },
        });
    } catch (error) {
        console.error("Add product error:", error);
        return NextResponse.json(
            { message: "Failed to add product" },
            { status: 500 }
        );
    }
}
