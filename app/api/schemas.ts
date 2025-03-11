import mongoose from "mongoose";

const { Schema } = mongoose;

const waitlistSchema = new Schema({
  email: String,
});

export const Waitlist = mongoose.model("Waitlist", waitlistSchema);
