/*
  Warnings:

  - Added the required column `useremail` to the `Monthly` table without a default value. This is not possible if the table is not empty.
  - Added the required column `useremail` to the `Todos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `useremail` to the `Weekly` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Monthly" ADD COLUMN     "useremail" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Todos" ADD COLUMN     "useremail" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Weekly" ADD COLUMN     "useremail" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Monthly" ADD CONSTRAINT "Monthly_useremail_fkey" FOREIGN KEY ("useremail") REFERENCES "public"."User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Weekly" ADD CONSTRAINT "Weekly_useremail_fkey" FOREIGN KEY ("useremail") REFERENCES "public"."User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Todos" ADD CONSTRAINT "Todos_useremail_fkey" FOREIGN KEY ("useremail") REFERENCES "public"."User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
