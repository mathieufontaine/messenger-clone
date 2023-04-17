import redis from "@/redis";
import { NextRequest, NextResponse } from "next/server";
import { Message } from "../../../typings";

export async function GET(req: NextRequest) {
  if (req.method !== "GET") {
    return NextResponse.json({ message: "Method not allowed" });
  }

  const data = await redis.hvals("messages");
  const messages: Message[] = Object.values(data)
    .map((message) => JSON.parse(message))
    .sort((a, b) => b.createdAt - a.createdAt);

  return NextResponse.json({messages});
}
