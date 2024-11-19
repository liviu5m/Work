import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest, {params: {id}} : {params: {id: string}}) {

  try { 
    const job = await prisma.job.findFirst({where: {id: parseInt(id)},include: {
      category: true,
      experience: true,
      type: true,
      qualification: true,
      gender: true,
      city: true,
      user: true,
    },});
    return NextResponse.json(job);
  }catch(err) {
    console.log(err);
    
    return NextResponse.json({error: err, status: 400});
  }
}

export async function DELETE(request: NextRequest, {params: {id}} : {params: {id: string}}) {
  try {
    const job = await prisma.job.delete({where: {id: parseInt(id)}});
    return NextResponse.json(job);
  }catch(err) {
    return NextResponse.json(err);
  }
}

export async function PUT(request: NextRequest, {params: {id}} : {params: {id: string}}) {
  try {
    const {
      name,
      description,
      benefits,
      responsibilities,
      imageUrl,
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
        
    const job = await prisma.job.update({data:{
      userId,
      name,
      description,
      minSalary,
      maxSalary,
      benefits,
      responsibilities,
      imageUrl,
      categoryId: parseInt(categoryId),
      experienceId: parseInt(experienceId),
      typeId: parseInt(typeId),
      qualificationId: parseInt(qualificationId),
      genderId: parseInt(genderId),
      cityId: location.id,
    }, where: {id: parseInt(id)}});
    return NextResponse.json(job);
  }catch(err) {
    return NextResponse.json(err);
  }
}