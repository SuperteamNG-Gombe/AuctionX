import { IsEmail, IsNotEmpty, validate } from "class-validator";
import dbConnect from "../utils.ts/db-setup";
import { Waitlist } from "../schemas";
import { ApiError } from "next/dist/server/api-utils";
import { AppError } from "../utils.ts/error";

class EmailDto {
  @IsNotEmpty()
  @IsEmail()
  email!: string;
}

export const addToWaitlist = async (emailDto: EmailDto) => {
  await dbConnect();

  const errors = await validate(emailDto);
  if (errors.length > 0) {
    throw new AppError(400, "Invalid email Address");
  }

  const emailInWaitlist = await Waitlist.findOne({ email: emailDto.email });
  if (emailInWaitlist) {
    throw new AppError(409, "Already in waitlist");
  }
  await Waitlist.create({ email: emailDto.email });
  return "Email added to waitlist";
};
