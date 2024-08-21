-- CreateTable
CREATE TABLE "Farm" (
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

    CONSTRAINT "Farm_pkey" PRIMARY KEY ("id")
);
