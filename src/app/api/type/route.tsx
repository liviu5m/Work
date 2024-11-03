import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const categories = await prisma.type.findMany();

    return NextResponse.json(categories);
  } catch (err) {
    return NextResponse.json(err);
  }
}
