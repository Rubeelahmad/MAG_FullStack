
# MAG_FullStack - Booking and Lead Generation System

This project is a Full Stack booking and lead generation system built with **Next.js**, **PostgreSQL**, **Prisma**, and **TailwindCSS**. It allows users to schedule a call by selecting a date and time while validating for existing bookings, and also allows submission of lead generation forms.

## Features

### Booking System:
- **Schedule a Call**: Users can select a date and time to schedule a call and provide their contact details.
- **Booking Validation**: The system checks for already booked time slots and disables them in the UI to prevent double bookings.
- **Form Validation**: Client-side and server-side validation for all required fields.
- **Confirmation**: Displays success or error messages after form submission.

### Lead Generation System:
- **Lead Form Submission**: Users can submit their full name, email address, and consent to the privacy policy.
- **Validation**: All fields are validated on both the frontend and backend.

## Technology Stack

- **Frontend**: Next.js, TypeScript, TailwindCSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Validation**: Client-side (via React) and server-side validation
- **Deployment**: Suitable for local development and production

## Setup Instructions

### Prerequisites

- **Node.js**: Version 16 or above
- **PostgreSQL**: Make sure you have PostgreSQL installed and running
- **Yarn** or **npm**: For package management

### Step 1: Clone the Repository

```bash
git clone https://github.com/Rubeelahmad/MAG_FullStack.git
cd mag-fullstack-app
```

### Step 2: Install Dependencies


```bash
npm install
```

### Step 3: Set Up PostgreSQL Database

1. Create a new PostgreSQL database.
2. Create a `.env` file at the root of the project and add the following environment variable:

```bash
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
```

Replace `username`, `password`, and `database_name` with your own PostgreSQL credentials.

### Step 4: Run Prisma Migrations

To set up the necessary database tables, run the Prisma migration:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

This will create the tables for `bookings` and `leads`.

### Step 5: Run the Development Server

To start the development server, run:


```bash
npm run dev 
```

The project will be available at `http://localhost:3000`.

## API Endpoints

### Bookings

- **GET /api/bookings**
  - Fetch all booking records.
  - Used to check time availability for a given date.
  - Response:
    ```json
    [
      {
        "date": "2024-09-25T00:00:00.000Z",
        "time": "9:00 AM"
      },
      {
        "date": "2024-09-25T00:00:00.000Z",
        "time": "10:00 AM"
      }
    ]
    ```

- **POST /api/bookings**
  - Create a new booking.
  - Validates the form data (email, phone number, etc.).
  - Payload:
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
  - Response: 
    - On success:
      ```json
      {
        "id": 1,
        "date": "2024-09-25",
        "time": "10:00 AM",
        "fullName": "John Doe",
        "email": "johndoe@example.com",
        "phone": "1234567890",
        "callNotes": "Looking forward to discussing the project"
      }
      ```
    - On error:
      ```json
      {
        "error": "Validation failed for email"
      }
      ```

### Leads

- **POST /api/leads**
  - Submit a lead form.
  - Validates full name, email, and checkbox values.
  - Payload:
    ```json
    {
      "fullName": "Jane Smith",
      "email": "janesmith@example.com",
      "checkbox": true
    }
    ```
  - Response:
    - On success:
      ```json
      {
        "id": 1,
        "fullName": "Jane Smith",
        "email": "janesmith@example.com",
        "checkbox": true
      }
      ```
    - On error:
      ```json
      {
        "error": "Validation failed for email"
      }
      ```

## Booking Form

- **Full Name**: Required
- **Email Address**: Must be a valid email format
- **Phone Number**: Must be a valid 10-digit number
- **Call Notes**: Optional
- **Date and Time**: Users select a date and time for the booking. Booked times are disabled in the form to prevent double booking.
- **Consent Checkbox**: Must be checked to submit the form.

## Project Structure

```bash
.
├── app/                        # Next.js App directory
│   ├── api/                    # API routes (bookings, leads)
│   └── components/             # React components (e.g., modals, form inputs)
|   └── context/                # Modal Context to show it from Multiple Places
├── prisma/                     # Prisma schema and migrations
│   └── schema.prisma           # Database models
├── public/                     # Public assets
├── styles/                     # TailwindCSS styles
├── README.md                   # Project documentation
└── .env                        # Environment variables
```

## Example Requests

### Booking Request Example

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

### Lead Form Submission Example

```json
{
  "fullName": "Jane Smith",
  "email": "janesmith@example.com",
  "checkbox": true
}
```

## Submission requirements

This project is intended to test full stack development skills, including the ability to manage database schemas, API design, and frontend/backend integration using modern frameworks like Next.js and Prisma. To submit your project, push it to a public GitHub repository and provide the link.

## Acknowledgments

- **Prisma ORM**: [Prisma.io](https://www.prisma.io/)
- **PostgreSQL**: [PostgreSQL.org](https://www.postgresql.org/)
- **Next.js Documentation**: [Next.js](https://nextjs.org/)
