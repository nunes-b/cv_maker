-- CreateTable
CREATE TABLE "qualificacoes" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "curriculoId" UUID NOT NULL,
    "descricao" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "qualificacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cursos" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "curriculoId" UUID NOT NULL,
    "titulo" TEXT NOT NULL,
    "instituicao" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cursos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "experiencias" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "curriculoId" UUID NOT NULL,
    "nomeEmpresa" TEXT NOT NULL,
    "periodo" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "atividades" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "experiencias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "idiomas" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "curriculoId" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "nivel" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "idiomas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "qualificacoes" ADD CONSTRAINT "qualificacoes_curriculoId_fkey" FOREIGN KEY ("curriculoId") REFERENCES "curriculos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cursos" ADD CONSTRAINT "cursos_curriculoId_fkey" FOREIGN KEY ("curriculoId") REFERENCES "curriculos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "experiencias" ADD CONSTRAINT "experiencias_curriculoId_fkey" FOREIGN KEY ("curriculoId") REFERENCES "curriculos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "idiomas" ADD CONSTRAINT "idiomas_curriculoId_fkey" FOREIGN KEY ("curriculoId") REFERENCES "curriculos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
