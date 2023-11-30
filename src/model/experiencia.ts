import ExpSchema from "../interfaces/experiencias/experiencias.interface";
import prismaClient from "../utils/prisma-client";

async function makeExp(
  curriculoId: string,
  nomeEmpresa: string,
  periodoInicio: string,
  periodoFim: string,
  cargo: string,
  atividades: string
): Promise<ExpSchema> {
  const experiencias = await prismaClient.experiencia.create({
    data: {
      curriculoId: curriculoId,
      nomeEmpresa: nomeEmpresa,
      cargo: cargo,
      periodoInicio: periodoInicio,
      periodoFim: periodoFim,
      atividades: atividades,
    },
    select: {
      id: true,
      curriculoId: true,
      nomeEmpresa: true,
      cargo: true,
      periodoInicio: true,
      periodoFim: true,
      atividades: true,
      updatedAt: true,
    },
  });
  return experiencias;
}

async function listExps() {
  const responselist = await prismaClient.experiencia.findMany({
    select: {
      id: true,
      curriculoId: true,
      nomeEmpresa: true,
      cargo: true,
      periodoInicio: true,
      periodoFim: true,
      atividades: true,
      updatedAt: true,
    },
  });
  return responselist;
}

async function listExpsById(id: string) {
  const listById = await prismaClient.experiencia.findUnique({
    where: { id: id },
    select: {
      curriculoId: true,
      nomeEmpresa: true,
      cargo: true,
      periodoInicio: true,
      periodoFim: true,
      atividades: true,
      updatedAt: true,
    },
  });
  return listById;
}

async function delExp(id: string) {
  const deletedCurso = await prismaClient.experiencia.delete({
    where: { id: id },
  });
  return deletedCurso;
}

async function updateExp(id: string, data: ExpSchema) {
  const updateExpD = await prismaClient.experiencia.update({
    where: { id: id },
    data: {
      curriculoId: data.curriculoId,
      nomeEmpresa: data.nomeEmpresa,
      cargo: data.cargo,
      periodoInicio: data.periodoInicio,
      periodoFim: data.periodoFim,
      atividades: data.atividades,
    },
    select: {
      id: true,
      curriculoId: true,
      nomeEmpresa: true,
      cargo: true,
      periodoInicio: true,
      periodoFim: true,
      atividades: true,
      updatedAt: true,
    },
  });
  return updateExpD;
}

export { makeExp, listExps, listExpsById, delExp, updateExp };
