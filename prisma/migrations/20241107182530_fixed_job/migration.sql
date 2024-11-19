/*
  Warnings:

  - Added the required column `maxSalary` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minSalary` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Job` ADD COLUMN `maxSalary` INTEGER NOT NULL,
    ADD COLUMN `minSalary` INTEGER NOT NULL;
