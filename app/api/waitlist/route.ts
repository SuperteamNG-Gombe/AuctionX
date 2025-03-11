import { NextResponse } from "next/server";
import dbConnect from "../db-setup";
import { Waitlist } from "../schemas";
import { ApiError } from "next/dist/server/api-utils";

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();
  const { email } = body;
  try {
    const emailInWaitlist = await Waitlist.findOne({ email });
    if (emailInWaitlist) {
      throw new ApiError(400, "Already in waitlist");
    }
    await Waitlist.create({ email });
    return NextResponse.json({ message: "Email added to waitlist" });
  } catch (error) {}
  return NextResponse.json({ message: "In the waitlist endpoint" });
}
