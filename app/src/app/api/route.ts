import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    console.log("Hello Server!")
    return NextResponse.json({ greet: "Hello!" })
}
