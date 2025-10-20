-- AlterTable
ALTER TABLE "public"."Goals" ADD COLUMN     "show" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "public"."Monthly" ADD COLUMN     "show" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "public"."Weekly" ADD COLUMN     "show" BOOLEAN NOT NULL DEFAULT true;
