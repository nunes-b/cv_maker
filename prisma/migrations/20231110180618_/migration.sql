-- DropForeignKey
ALTER TABLE "cursos" DROP CONSTRAINT "cursos_curriculoId_fkey";

-- DropForeignKey
ALTER TABLE "experiencias" DROP CONSTRAINT "experiencias_curriculoId_fkey";

-- DropForeignKey
ALTER TABLE "idiomas" DROP CONSTRAINT "idiomas_curriculoId_fkey";

-- DropForeignKey
ALTER TABLE "qualificacoes" DROP CONSTRAINT "qualificacoes_curriculoId_fkey";

-- AddForeignKey
ALTER TABLE "qualificacoes" ADD CONSTRAINT "qualificacoes_curriculoId_fkey" FOREIGN KEY ("curriculoId") REFERENCES "curriculos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cursos" ADD CONSTRAINT "cursos_curriculoId_fkey" FOREIGN KEY ("curriculoId") REFERENCES "curriculos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "experiencias" ADD CONSTRAINT "experiencias_curriculoId_fkey" FOREIGN KEY ("curriculoId") REFERENCES "curriculos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "idiomas" ADD CONSTRAINT "idiomas_curriculoId_fkey" FOREIGN KEY ("curriculoId") REFERENCES "curriculos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
