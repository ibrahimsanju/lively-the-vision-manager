-- CreateTable
CREATE TABLE "public"."Todos" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "checked" BOOLEAN NOT NULL DEFAULT false,
    "inTodos" BOOLEAN NOT NULL DEFAULT false,
    "weeklyId" TEXT NOT NULL,

    CONSTRAINT "Todos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Todos" ADD CONSTRAINT "Todos_weeklyId_fkey" FOREIGN KEY ("weeklyId") REFERENCES "public"."Weekly"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
