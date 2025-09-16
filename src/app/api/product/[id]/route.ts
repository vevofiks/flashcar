/* eslint-disable */

import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";


interface IProduct {
    name: string;
    description: string;
    category: string;
    updatedAt: Date;
    image?: string;
}

export async function PATCH(
    req: Request,
    context: { params: any }
) {
    try {
        const client = await clientPromise;
        const db = client.db("flashcar");

        const { id } = context.params;
        const body = await req.json();

        if (typeof body.isBlocked !== "boolean") {
            return NextResponse.json(
                { error: "isBlocked must be a boolean" },
                { status: 400 }
            );
        }

        const updated = await db
            .collection("products")
            .findOneAndUpdate(
                { _id: new ObjectId(id) },
                { $set: { isBlocked: body.isBlocked } },
                { returnDocument: "after" }
            );

        if (!updated) {
            return NextResponse.json(
                { error: "Product not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            message: `Product ${
                body.isBlocked ? "blocked" : "unblocked"
            } successfully`,
            data: updated,
        });
    } catch (error) {
        console.error("Error updating product status:", error);
        return NextResponse.json(
            { error: "Failed to update product status" },
            { status: 500 }
        );
    }
}

// Utility to handle FormData (text + file)
async function parseFormData(req: Request) {
    const formData = await req.formData();

    const name = formData.get("name")?.toString() || "";
    const description = formData.get("description")?.toString() || "";
    const category = formData.get("category")?.toString() || "";
    const image = formData.get("image"); // could be File or string

    return { name, description, category, image };
}

export async function PUT(
    req: Request,
    context: { params: any }
) {
    try {
        const client = await clientPromise;
        const db = client.db("flashcar");

        const { id } = context.params;
        const { name, description, category, image } = await parseFormData(req);

        if (!name || !description || !category) {
            return NextResponse.json(
                { error: "Name, description, and category are required" },
                { status: 400 }
            );
        }

        // Build update object
        const updateFields: IProduct = {
            name,
            description,
            category,
            updatedAt: new Date(),
        };

        // Handle image
        if (image instanceof File) {
            // Convert file to base64 (or upload to S3/Cloudinary if you want later)
            const buffer = Buffer.from(await image.arrayBuffer());
            updateFields.image = buffer.toString("base64");
        } else if (typeof image === "string" && image.trim() !== "") {
            updateFields.image = image; // assume it's a URL or base64 already
        }

        const updated = await db
            .collection("products")
            .findOneAndUpdate(
                { _id: new ObjectId(id) },
                { $set: updateFields },
                { returnDocument: "after" }
            );

        if (!updated) {
            return NextResponse.json(
                { error: "Product not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({
            message: "Product updated successfully",
            data: updated,
        });
    } catch (error) {
        console.error("Error updating product:", error);
        return NextResponse.json(
            { error: "Failed to update product" },
            { status: 500 }
        );
    }
}

export async function DELETE(
    req: Request,
    context: { params: any }
) {
    try {
        const client = await clientPromise;
        const db = client.db("flashcar");

        const { id } = context.params;

        const deleted = await db
            .collection("products")
            .deleteOne({ _id: new ObjectId(id) });

        if (deleted.deletedCount === 0) {
            return NextResponse.json(
                { error: "Product not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error deleting product:", error);
        return NextResponse.json(
            { error: "Failed to delete product" },
            { status: 500 }
        );
    }
}
