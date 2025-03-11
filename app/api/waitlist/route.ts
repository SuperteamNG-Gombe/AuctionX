import { NextResponse } from "next/server";
import dbConnect from "../db-setup";
import { ApiError } from "next/dist/server/api-utils";
import { addToWaitlist } from "./service";

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();
  try {
    const response = await addToWaitlist(body);
    return NextResponse.json({ message: response });
  } catch (error: any) {
    return NextResponse.json({ message: `${error?.message}` });
  }
}
