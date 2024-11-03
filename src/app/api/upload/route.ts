import { v2 as cloudinary } from 'cloudinary';
import { NextRequest, NextResponse } from 'next/server';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: NextRequest) {
  try {
    const { image } = await request.json();
    const uploadResponse = await cloudinary.uploader.upload(image, {
      folder: 'uploads',
    });
    return NextResponse.json(uploadResponse);
  }catch(err) {
    return NextResponse.json(err);
  }
}