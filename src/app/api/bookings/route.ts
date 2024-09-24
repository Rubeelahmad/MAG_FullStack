import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { VALID_EMAIL, VALID_PHONE } from "@/utils/constants";

const prisma = new PrismaClient();

// GET request to fetch bookings
export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      select: { date: true, time: true },
    });
    console.log(bookings)
    return NextResponse.json(bookings, { status: 200 });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return NextResponse.json(
      { error: "Error fetching bookings" },
      { status: 500 }
    );
  }
}

// POST request to create a new booking
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { date, time, fullName, email, phone, callNotes, checkbox } = body;

    // Check for missing date
    if (!date) {
      return NextResponse.json(
        { error: "Please select date." },
        { status: 400 }
      );
    }

    // Check for missing full name field
    if (!time) {
      return NextResponse.json(
        { error: "Please select time." },
        { status: 400 }
      );
    }

    // Check for missing full name field
    if (!fullName) {
      return NextResponse.json(
        { error: "Full Name required." },
        { status: 400 }
      );
    }
    // Check for missing email field
    if (!email) {
      return NextResponse.json({ error: "Email required." }, { status: 400 });
    }

    // Validate email format
    if (!VALID_EMAIL.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    // Check for missing Phone number field
    if (!phone) {
      return NextResponse.json(
        { error: "Phone number required." },
        { status: 400 }
      );
    }

    // Validate phone number (example: 10-digit phone number)
    if (!VALID_PHONE.test(phone)) {
      return NextResponse.json(
        { error: "Invalid phone number format. It must contain exactly 10 digits." },
        { status: 400 }
      );
    }

    // Extra Check if the date and time already exist (to avoid duplicate bookings)
    const existingBooking = await prisma.booking.findFirst({
      where: {
        date: new Date(date),
        time,
      },
    });

    if (existingBooking) {
      return NextResponse.json(
        { error: "This time slot is already booked." },
        { status: 400 }
      );
    }

    // Create new booking in the database
    const newBooking = await prisma.booking.create({
      data: {
        date: new Date(date), // Convert to Date object
        time,
        fullName,
        email,
        phone,
        callNotes,
        checkbox,
      },
    });

    return NextResponse.json({message: "Booking created successfully!", booking: newBooking}, { status: 201 });
  } catch (error) {
    console.error("Error creating booking:", error);
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}
