import mongoose, { Schema } from "mongoose";

const heroSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Hero = mongoose.models.Hero || mongoose.model("Hero", heroSchema);

export default Hero;
