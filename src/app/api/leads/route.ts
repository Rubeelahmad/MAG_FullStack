import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// POST request to create a lead
export async function POST(req: Request) {
  try {
    const { fullName, email, checkbox } = await req.json();

    //Email validation from server-side
    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    const newLead = await prisma.lead.create({
      data: { fullName, email, checkbox },
    });

    return NextResponse.json(newLead, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating lead' }, { status: 500 });
  }
}
