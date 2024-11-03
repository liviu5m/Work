import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";

    const cities = await prisma.city.findMany({
      where: {
        OR: [
          { name: { contains: search }}, 
          { country: { contains: search }},
        ],
      },
      take: 5
    });

    return NextResponse.json(cities);
  } catch (err) {
    return NextResponse.json({ error: "An error occurred", details: err });
  }
}
