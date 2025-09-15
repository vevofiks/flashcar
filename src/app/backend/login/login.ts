// pages/api/admin/login.ts
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const ADMIN = process.env.ADMIN ||""
const PASS = process.env.PASS ||""
const JWT_SECRET = process.env.JWT_SECRET || "super-secret-key"; 

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, password } = req.body;

  if (email === ADMIN && password === PASS) {
    const token = jwt.sign({ email, role: "admin" }, JWT_SECRET, {
      expiresIn: "1d",
    });

    return res.status(200).json({ token, message: "Login successful" });
  }

  return res.status(401).json({ message: "Invalid email or password" });
}
