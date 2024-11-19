/*
  Warnings:

  - Added the required column `benefits` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `responsibilities` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Job` ADD COLUMN `benefits` VARCHAR(191) NOT NULL,
    ADD COLUMN `responsibilities` VARCHAR(191) NOT NULL;
