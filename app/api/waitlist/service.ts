import { IsEmail, IsNotEmpty } from "class-validator";
import dbConnect from "../db-setup";
import { Waitlist } from "../schemas";
import { ApiError } from "next/dist/server/api-utils";

class EmailDto {
  @IsNotEmpty()
  @IsEmail()
  email!: string;
}

export const addToWaitlist = async (emailDto: EmailDto) => {
  await dbConnect();
  const email = emailDto.email;

  const emailInWaitlist = await Waitlist.findOne({ email });
  if (emailInWaitlist) {
    throw new ApiError(400, "Already in waitlist");
  }
  await Waitlist.create({ email });
  return "Email added to waitlist";
};
