
# Booking System Assignment

This project is a simple lead generation and booking system developed using **Next.js**, **PostgreSQL**, and **Prisma ORM**. It allows users to schedule a call by selecting a date and time, with validation for existing bookings to avoid double bookings.

## Features
- **Schedule a Call**: Users can select a date and time, provide their contact information, and submit a booking request.
- **Booking Validation**: The system checks for already booked times and disables them in the UI to prevent double booking.
- **Form Validation**: All inputs are validated, including email format, phone number, and consent checkbox.
- **Error and Success Messages**: Displays success or error messages based on the form submission status.
- **PostgreSQL Database**: All bookings are stored in a PostgreSQL database via Prisma ORM.

## Technology Stack
- **Frontend**: React, TailwindCSS, Next.js (Server-Side Rendering)
- **Backend**: Next.js API routes
- **Database**: PostgreSQL
- **ORM**: Prisma ORM for database interaction
- **Deployment**: Local Development / Production-ready

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL
- Yarn or npm (Package Manager)

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd <project-folder>
```

### Step 2: Install Dependencies

Run the following command to install the necessary dependencies:

```bash
yarn install
```

or

```bash
npm install
```

### Step 3: Set Up PostgreSQL Database

1. Create a PostgreSQL database.
2. Update the `.env` file with your PostgreSQL connection string.

Example `.env`:

```bash
DATABASE_URL="postgresql://username:password@localhost:5432/mydatabase"
```

### Step 4: Run Prisma Migrations

To set up the database schema, run the following Prisma migration commands:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

This will create the necessary database tables and generate the Prisma client.

### Step 5: Run the Development Server

To start the development server, run:

```bash
yarn dev
```

or

```bash
npm run dev
```

The project will be available at `http://localhost:3000`.

### API Endpoints

- **GET /api/bookings**: Fetch all bookings (filtered by date and time).
- **POST /api/bookings**: Create a new booking. This endpoint validates the email, phone number, and prevents double booking by checking the date and time.

### Environment Variables

| Key           | Value                              |
| ------------- | ---------------------------------- |
| `DATABASE_URL` | PostgreSQL connection string       |

### Booking Form

- **Full Name**: Required.
- **Email**: Must be in a valid email format.
- **Phone Number**: Must be a valid 10-digit number.
- **Date and Time**: Users can select a date and time for booking. Time slots that are already booked are disabled.
- **Consent**: Checkbox for the user's consent to the privacy policy.

### Project Structure

```bash
.
├── app/                        # Next.js App directory
│   ├── api/                    # API routes (bookings)
│   └── components/             # React components
├── prisma/                     # Prisma schema
│   └── schema.prisma           # Database models
├── public/                     # Public assets
├── styles/                     # Global styles (TailwindCSS)
├── README.md                   # Project documentation
└── .env                        # Environment variables
```

### Example Booking Request

```json
{
  "date": "2024-09-25",
  "time": "10:00 AM",
  "fullName": "John Doe",
  "email": "johndoe@example.com",
  "phone": "1234567890",
  "callNotes": "Looking forward to discussing the project",
  "checkbox": true
}
```

## Acknowledgments

- Prisma ORM documentation: [Prisma.io](https://www.prisma.io/)
- PostgreSQL documentation: [PostgreSQL](https://www.postgresql.org/)
- Next.js documentation: [Next.js](https://nextjs.org/)
