import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST() {
    try {
        const client = await clientPromise;
        const db = client.db("flashcar");

        const products = await db
            .collection("products")
            .aggregate([
                {
                    $addFields: {
                        categoryObjId: { $toObjectId: "$category" }, // convert string to ObjectId
                    },
                },
                {
                    $lookup: {
                        from: "categories",
                        localField: "categoryObjId",
                        foreignField: "_id",
                        as: "categoryData",
                    },
                },
                { $unwind: "$categoryData" },
                {
                    $project: {
                        _id: 1,
                        name: 1,
                        description: 1,
                        image: 1,
                        isBlocked: 1,
                        category: {
                            _id: "$categoryData._id",
                            name: "$categoryData.name",
                        },
                    },
                },
            ])
            .toArray();

        return NextResponse.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        return NextResponse.json(
            { error: "Failed to fetch products" },
            { status: 500 }
        );
    }
}
