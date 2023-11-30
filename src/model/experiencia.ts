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

// async function delCurso(id: string) {
//   const deletedCurso = await prismaClient.curso.delete({
//     where: { id: id },
//   });
//   return deletedCurso;
// }

// async function updateCurso(id: string, data: CursoSchema) {
//   const updateCursoD = await prismaClient.curso.update({
//     where: { id: id },
//     data: {
//       instituicao: data.instituicao,
//       titulo: data.titulo,
//       local: data.local,
//       data: data.data,
//     },
//     select: {
//       id: false,
//       curriculoId: false,
//       instituicao: true,
//       titulo: true,
//       local: true,
//       data: true,
//       urlCertificado: true,
//       expire: true,
//       updatedAt: true,
//     },
//   });
//   return updateCursoD;
// }

export { makeExp, listExps, listExpsById };
