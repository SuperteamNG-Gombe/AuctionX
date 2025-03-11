import { NextResponse } from "next/server";
import dbConnect from "../utils.ts/db-setup";
import { ApiError } from "next/dist/server/api-utils";
import { addToWaitlist } from "./service";
import { AppError } from "../utils.ts/error";

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();
  try {
    const response = await addToWaitlist(body);
    return NextResponse.json({ message: response });
  } catch (error: any) {
    if (error instanceof AppError) {
      return NextResponse.json(
        { error: error.message, details: error.details },
        { status: error.statusCode }
      );
    }
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
