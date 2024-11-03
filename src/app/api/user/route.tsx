import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId") || "";
    const email = searchParams.get("email") || "";
    const password = searchParams.get("password") || "";
    const type = searchParams.get("type") || "";
    let user;
    if (type != "login") {
      user = await prisma.user.findFirst({
        where: { id: parseInt(userId) },
      });
    } else {
      if (!email || !password)
        return NextResponse.json(
          { error: "Please fill all the required fields" },
          { status: 400 }
        );
      user = await prisma.user.findFirst({
        where: { email, password },
      });
      if(!user) return NextResponse.json({ error: "Wrong credentials" }, { status: 400 });
    }

    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json(err);
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (data.name.length == 0 && data.email.length == 0)
      return NextResponse.json(
        { error: "Please fill all fields" },
        { status: 400 }
      );
    if (data.password.length < 8)
      return NextResponse.json(
        { error: "Password too short" },
        { status: 400 }
      );
    if (data.password != data.passwordConfirmation)
      return NextResponse.json(
        { error: "Passwords do not match" },
        { status: 400 }
      );

    const user = await prisma.user.create({
      data: { name: data.name, password: data.password, email: data.email },
    });

    return NextResponse.json(user);
  } catch (err: unknown) {
    if (err instanceof PrismaClientKnownRequestError && err.code === "P2002") {
      return NextResponse.json(
        { error: "Email already in use" },
        { status: 400 }
      );
    }
    return NextResponse.json(err);
  }
}
