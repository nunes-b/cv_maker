/*
  Warnings:

  - You are about to drop the column `periodo` on the `experiencias` table. All the data in the column will be lost.
  - Added the required column `urlCertificado` to the `cursos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `periodoFim` to the `experiencias` table without a default value. This is not possible if the table is not empty.
  - Added the required column `periodoInicio` to the `experiencias` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cursos" ADD COLUMN     "expire" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "urlCertificado" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "experiencias" DROP COLUMN "periodo",
ADD COLUMN     "periodoFim" TEXT NOT NULL,
ADD COLUMN     "periodoInicio" TEXT NOT NULL;
