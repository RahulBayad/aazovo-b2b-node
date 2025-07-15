import { v2 as cloudinary } from "cloudinary";
import { ApiError } from "./ApiError";

export const uploadOnCloudinary = async (file: Express.Multer.File) => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    const resourceType = file.mimetype.startsWith("image/")
      ? "image"
      : file.mimetype === "application/pdf"
      ? "raw"
      : "auto";
    const response = await cloudinary.uploader.upload(file.path, {
      resource_type: resourceType,
    });
    return response;
  } catch (error) {
    throw new ApiError(500, (error as Error).message);
  }
};
