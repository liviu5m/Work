import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const {jobId, userId,name, email,weblink,letter} = await request.json();
}