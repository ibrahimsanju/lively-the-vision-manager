-- CreateTable
CREATE TABLE "public"."Monthly" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Monthly_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Monthly" ADD CONSTRAINT "Monthly_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."Goals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
