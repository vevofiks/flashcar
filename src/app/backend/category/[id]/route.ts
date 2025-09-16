import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function PUT(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const client = await clientPromise;
        const db = client.db("flashcar");

        const id = (await params).id;
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

        // Wrap inside { data: ... } for frontend compatibility
        return NextResponse.json({ data: updated });
    } catch (error) {
        console.error("Error updating category:", error);
        return NextResponse.json(
            { error: "Failed to update category" },
            { status: 500 }
        );
    }
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const client = await clientPromise;
        const db = client.db("flashcar");

        const id = (await params).id;

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
    } catch (error) {
        console.error("Error deleting category:", error);
        return NextResponse.json(
            { error: "Failed to delete category" },
            { status: 500 }
        );
    }
}
