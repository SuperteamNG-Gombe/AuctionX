import mongoose from "mongoose";

const { Schema } = mongoose;

const waitlistSchema = new Schema({
  email: String,
  createdAt: { type: Date, default: Date.now },
});

export const Waitlist = mongoose.model("Waitlist", waitlistSchema);
