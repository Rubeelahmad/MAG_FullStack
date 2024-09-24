-- DropIndex
DROP INDEX "Booking_email_key";

-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "callNotes" DROP NOT NULL;
