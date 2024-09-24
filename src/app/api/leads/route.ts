import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { VALID_EMAIL } from "@/utils/constants";

const prisma = new PrismaClient();

// POST request to create a lead
export async function POST(req: Request) {
  try {
    const { fullName, email, checkbox } = await req.json();

    // Check for missing full name field
    if (!fullName) {
      return NextResponse.json(
        { error: "Full Name required" },
        { status: 400 }
      );
    }
    // Check for missing email field
    if (!email) {
      return NextResponse.json({ error: "Email  required" }, { status: 400 });
    }
    // Email validation from server-side
    if (!VALID_EMAIL.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }
    // Checkbox validation
    if (!checkbox || checkbox === undefined) {
      return NextResponse.json(
        { error: "Consent is required" },
        { status: 400 }
      );
    }

    // Create a new lead
    const newLead = await prisma.lead.create({
      data: { fullName, email, checkbox },
    });

    // Respond with a success message and the lead data
    return NextResponse.json(
      {
        message: "Lead created successfully!",
        lead: newLead,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating lead:", error);
    return NextResponse.json({ error: "Lead email already exist." }, { status: 500 });
  }
}
