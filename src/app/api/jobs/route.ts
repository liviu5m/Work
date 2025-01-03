import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");
    const categoryId = searchParams.get("categoryId");
    const experienceId = searchParams.get("experienceId");
    const typeId = searchParams.get("typeId");
    const qualificationId = searchParams.get("qualificationId");
    const genderId = searchParams.get("genderId");
    let location = searchParams.get("location");
    let userId = searchParams.get("userId");

    if (location && parseInt(location) === -1) location = null;
    if (userId && parseInt(userId) === -1) userId = null;

    const where = {
      ...(name && { name: { contains: name } }),
      ...(categoryId &&
        categoryId != "0" && { categoryId: parseInt(categoryId) }),
      ...(experienceId &&
        experienceId != "0" && { experienceId: parseInt(experienceId) }),
      ...(typeId && typeId != "0" && { typeId: parseInt(typeId) }),
      ...(qualificationId &&
        qualificationId != "0" && {
          qualificationId: parseInt(qualificationId),
        }),
      ...(genderId && genderId != "1" && { genderId: parseInt(genderId) }),
      ...(location && { cityId: parseInt(location) }),
      ...(userId && { userId: parseInt(userId) }),
    };

    const jobs = await prisma.job.findMany({
      where,
      include: {
        category: true,
        experience: true,
        type: true,
        qualification: true,
        gender: true,
        city: true,
        user: true,
      },
    });

    return NextResponse.json(jobs);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const {
      name,
      description,
      benefits,
      responsibilities,
      image,
      categoryId,
      minSalary,
      maxSalary,
      experienceId,
      typeId,
      qualificationId,
      genderId,
      location,
      userId,
    } = await request.json();

    const job = await prisma.job.create({
      data: {
        userId,
        name,
        description,
        minSalary,
        maxSalary,
        benefits,
        responsibilities: responsibilities.substring(18),
        imageUrl: image,
        categoryId: parseInt(categoryId),
        experienceId: parseInt(experienceId),
        typeId: parseInt(typeId),
        qualificationId: parseInt(qualificationId),
        genderId: parseInt(genderId),
        cityId: location.id,
      },
    });

    return NextResponse.json(job);
  } catch (err) {
    console.log(err);

    return NextResponse.json(err);
  }
}
