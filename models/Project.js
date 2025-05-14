import mongoose from "mongoose";
import dbConnect from "@/lib/db";

await dbConnect();

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  isArchitecture: {
    type: Boolean,
    required: true,
  },
  projectType: {
    type: String,
    enum: ["video", "photo", "video y foto"],
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  client: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    required: function () {
      return this.projectType === "video";
    },
  },
  photos: {
    type: [String],
    required: function () {
      return this.projectType === "photo";
    },
  },
  displayOrder: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
