/*
  Warnings:

  - You are about to drop the column `id_user` on the `warnings` table. All the data in the column will be lost.
  - Added the required column `status` to the `warnings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "warnings" DROP COLUMN "id_user",
ADD COLUMN     "status" TEXT NOT NULL;
