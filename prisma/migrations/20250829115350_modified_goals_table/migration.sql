/*
  Warnings:

  - You are about to drop the column `userId` on the `Goals` table. All the data in the column will be lost.
  - Added the required column `useremail` to the `Goals` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Goals" DROP CONSTRAINT "Goals_userId_fkey";

-- AlterTable
ALTER TABLE "public"."Goals" DROP COLUMN "userId",
ADD COLUMN     "useremail" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Goals" ADD CONSTRAINT "Goals_useremail_fkey" FOREIGN KEY ("useremail") REFERENCES "public"."User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
