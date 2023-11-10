import CursoSchema from "../interfaces/curso/curso.interface";
import prismaClient from "../utils/prisma-client";

async function makeCurso(
  curriculoId: string,
  titulo: string,
  instituicao: string,
  local: string,
  data: Date,
  urlCertificado: string,
  expire: boolean
): Promise<CursoSchema> {
  const qualificacao = await prismaClient.curso.create({
    data: {
      curriculoId: curriculoId,
      titulo: titulo,
      instituicao: instituicao,
      local: local,
      data: data,
      urlCertificado: urlCertificado,
      expire: expire,
    },
    select: {
      id: true,
      curriculoId: true,
      instituicao: true,
      titulo: true,
      local: true,
      data: true,
      urlCertificado: true,
      expire: true,
      createdAt: true,
    },
  });
  return qualificacao;
}

async function listCurso() {
  const responselist = await prismaClient.curso.findMany({
    select: {
      id: true,
      curriculoId: true,
      instituicao: true,
      titulo: true,
      local: true,
      data: true,
      urlCertificado: true,
      expire: true,
      updatedAt: true,
    },
  });
  return responselist;
}

async function listCursoById(id: string) {
  const listById = await prismaClient.curso.findUnique({
    where: { id: id },
    select: {
      id: false,
      curriculoId: true,
      instituicao: true,
      titulo: true,
      local: true,
      data: true,
      urlCertificado: true,
      expire: true,
      updatedAt: true,
    },
  });
  return listById;
}

async function delCurso(id: string) {
  const deletedCurso = await prismaClient.curso.delete({
    where: { id: id },
  });
  return deletedCurso;
}

async function updateCurso(id: string, data: CursoSchema) {
  const updateCursoD = await prismaClient.curso.update({
    where: { id: id },
    data: {
      instituicao: data.instituicao,
      titulo: data.titulo,
      local: data.local,
      data: data.data,
    },
    select: {
      id: false,
      curriculoId: false,
      instituicao: true,
      titulo: true,
      local: true,
      data: true,
      urlCertificado: true,
      expire: true,
      updatedAt: true,
    },
  });
  return updateCursoD;
}

export { makeCurso, listCurso, listCursoById, updateCurso, delCurso };
