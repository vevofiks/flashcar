import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST() {
    try {
        const client = await clientPromise;
        const db = client.db("flashcar");

        // Fetch all products
        const products = await db.collection("products").find({}).toArray();

        return NextResponse.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        return NextResponse.json(
            { error: "Failed to fetch products" },
            { status: 500 }
        );
    }
}
