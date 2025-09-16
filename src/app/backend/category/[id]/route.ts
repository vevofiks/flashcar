import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function PUT(req: NextRequest, context: any) {
    const client = await clientPromise;
    const db = client.db("flashcar");

    const body = await req.json();
    const { id } = context.params; // runtime is always an object

    if (!body.name || typeof body.name !== "string") {
        return NextResponse.json(
            { error: "Name is required" },
            { status: 400 }
        );
    }

    const updated = await db
        .collection("categories")
        .findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: { name: body.name } },
            { returnDocument: "after" }
        );

    if (!updated) {
        return NextResponse.json(
            { error: "Category not found" },
            { status: 404 }
        );
    }

    return NextResponse.json({ data: updated });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function DELETE(req: NextRequest, context: any) {
    const client = await clientPromise;
    const db = client.db("flashcar");

    const { id } = context.params;

    const deleted = await db
        .collection("categories")
        .deleteOne({ _id: new ObjectId(id) });

    if (deleted.deletedCount === 0) {
        return NextResponse.json(
            { error: "Category not found" },
            { status: 404 }
        );
    }

    return NextResponse.json({ message: "Category deleted successfully" });
}
