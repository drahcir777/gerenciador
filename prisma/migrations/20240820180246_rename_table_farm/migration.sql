/*
  Warnings:

  - You are about to drop the `Farm` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Farm";

-- CreateTable
CREATE TABLE "farms" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "consultantCpf" TEXT NOT NULL,
    "livestock" TEXT NOT NULL,
    "totalArea" DOUBLE PRECISION NOT NULL,
    "pastureArea" DOUBLE PRECISION NOT NULL,
    "animalCount" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "farms_pkey" PRIMARY KEY ("id")
);
