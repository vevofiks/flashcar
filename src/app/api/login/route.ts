import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        // Parse the request body
        const body = await req.json();
        const { email, password } = body;

        const ADMIN = process.env.ADMIN as string;
        const PASS = process.env.PASS as string;

        if(!ADMIN) {
            throw new Error("Please add your admin");
        }
        if(!PASS) {
            throw new Error("Please add your pass");
        }

        if (email === ADMIN && password === PASS) {
            // Optional: generate JWT if you want
            // const token = jwt.sign({ email, role: "admin" }, JWT_SECRET, { expiresIn: "1d" });

            return NextResponse.json(
                { message: "Login successful" },
                { status: 200 }
            );
        }

        return NextResponse.json(
            { message: "Invalid email or password" },
            { status: 401 }
        );
    } catch (error) {
        console.error("Login error:", error);
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 }
        );
    }
}
