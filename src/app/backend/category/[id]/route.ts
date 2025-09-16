import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";

type Params = { id: string };

// @ts-expect-error – Next.js typing bug: params is not a Promise at runtime
export async function PUT(req: NextRequest, { params }: { params: Params }) {
    const client = await clientPromise;
    const db = client.db("flashcar");

    const body = await req.json();

    if (!body.name || typeof body.name !== "string") {
        return NextResponse.json(
            { error: "Name is required" },
            { status: 400 }
        );
    }

    const updated = await db
        .collection("categories")
        .findOneAndUpdate(
            { _id: new ObjectId(params.id) },
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

// @ts-expect-error – Next.js typing bug
export async function DELETE(req: NextRequest, { params }: { params: Params }) {
    const client = await clientPromise;
    const db = client.db("flashcar");

    const deleted = await db
        .collection("categories")
        .deleteOne({ _id: new ObjectId(params.id) });

    if (deleted.deletedCount === 0) {
        return NextResponse.json(
            { error: "Category not found" },
            { status: 404 }
        );
    }

    return NextResponse.json({ message: "Category deleted successfully" });
}
