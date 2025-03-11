import { IsEmail, IsNotEmpty, validate } from "class-validator";
import dbConnect from "../utils/db-setup";
import { Waitlist } from "../schemas";
class EmailDto {
  @IsNotEmpty()
  @IsEmail()
  email!: string;
}

export const addToWaitlist = async (emailDto: EmailDto) => {
  await dbConnect();

  const errors = await validate(emailDto);
  if (errors.length > 0) {
    throw new Error("Invalid email Address");
  }

  const emailInWaitlist = await Waitlist.findOne({ email: emailDto.email });
  if (emailInWaitlist) {
    throw new Error("Already in waitlist");
  }
  await Waitlist.create({ email: emailDto.email });
  return "Email added to waitlist";
};
