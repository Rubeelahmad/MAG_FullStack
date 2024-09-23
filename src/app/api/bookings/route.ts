import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET request to fetch bookings
export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      select: { date: true, time: true },
    });
    return NextResponse.json(bookings, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching bookings' }, { status: 500 });
  }
}


// POST request to create a new booking
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { date, time, fullName, email, phone, callNotes, checkbox } = body;

    // server-side validation for email and phone
    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }
    if (!/^\d{10}$/.test(phone)) {
      return NextResponse.json({ error: 'Invalid phone number' }, { status: 400 });
    }

    // Create new booking in the database
    const newBooking = await prisma.booking.create({
      data: {
        date: new Date(date),  // Convert to Date object
        time,
        fullName,
        email,
        phone,
        callNotes,
        checkbox,
      },
    });

    return NextResponse.json(newBooking, { status: 201 });
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 });
  }
}

