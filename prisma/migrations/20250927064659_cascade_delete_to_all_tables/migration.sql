-- DropForeignKey
ALTER TABLE "public"."Goals" DROP CONSTRAINT "Goals_useremail_fkey";

-- DropForeignKey
ALTER TABLE "public"."Monthly" DROP CONSTRAINT "Monthly_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Weekly" DROP CONSTRAINT "Weekly_monthlyId_fkey";

-- AddForeignKey
ALTER TABLE "public"."Goals" ADD CONSTRAINT "Goals_useremail_fkey" FOREIGN KEY ("useremail") REFERENCES "public"."User"("email") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Monthly" ADD CONSTRAINT "Monthly_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."Goals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Weekly" ADD CONSTRAINT "Weekly_monthlyId_fkey" FOREIGN KEY ("monthlyId") REFERENCES "public"."Monthly"("id") ON DELETE CASCADE ON UPDATE CASCADE;
