-- CreateTable
CREATE TABLE "public"."Weekly" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "monthlyId" TEXT NOT NULL,
    "inField" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Weekly_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Weekly" ADD CONSTRAINT "Weekly_monthlyId_fkey" FOREIGN KEY ("monthlyId") REFERENCES "public"."Monthly"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
