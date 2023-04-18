import redis from "@/redis";
import { NextRequest, NextResponse } from "next/server";
import { Message } from "../../../typings";
import { serverPusher } from "../../../utils/pusher";

export async function POST(req: NextRequest) {

    const {message} = await req.json()

    if(req.method !== 'POST') {
       return NextResponse.json({ message: 'Method not allowed' });
    }
    const newMessage: Message = {
        ...message,
        createdAt: Date.now(),
    };

    try {
        await redis.hset('messages', message.id, JSON.stringify(newMessage));
        serverPusher.trigger('messages', 'newMessage', newMessage);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: 'Internal server error' });
    }
    return NextResponse.json({ message: newMessage });
}
