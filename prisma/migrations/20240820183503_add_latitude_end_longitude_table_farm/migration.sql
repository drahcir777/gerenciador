/*
  Warnings:

  - You are about to drop the column `location` on the `farms` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "farms" DROP COLUMN "location",
ADD COLUMN     "latitude" DECIMAL(65,30),
ADD COLUMN     "longitude" DECIMAL(65,30);
