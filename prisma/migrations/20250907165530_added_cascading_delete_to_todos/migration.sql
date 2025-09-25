-- DropForeignKey
ALTER TABLE "public"."Todos" DROP CONSTRAINT "Todos_weeklyId_fkey";

-- AddForeignKey
ALTER TABLE "public"."Todos" ADD CONSTRAINT "Todos_weeklyId_fkey" FOREIGN KEY ("weeklyId") REFERENCES "public"."Weekly"("id") ON DELETE CASCADE ON UPDATE CASCADE;
