import QualificacaoSchema from "../interfaces/qualificacao/qualificacao.interface";
import prismaClient from "../utils/prisma-client";

async function makeAQualificacao(
  descricao: string,
  curriculoId: string
): Promise<QualificacaoSchema> {
  const qualificacao = await prismaClient.qualificacao.create({
    data: {
      curriculoId: curriculoId,
      descricao: descricao,
    },
    select: {
      id: true,
      curriculoId: true,
      descricao: true,
      createdAt: true,
    },
  });
  return qualificacao;
}

async function listQualificacao() {
  const responselist = await prismaClient.qualificacao.findMany({
    select: {
      id: false,
      curriculoId: true,
      descricao: true,
      curriculo: false,
      createdAt: false,
      updatedAt: true,
    },
  });
  return responselist;
}

async function ListQualificacaoById(id: string) {
  const listById = await prismaClient.qualificacao.findUnique({
    where: { id: id },
    select: {
      id: true,
      curriculoId: false,
      descricao: true,
      curriculo: false,
      createdAt: true,
      updatedAt: true,
    },
  });
  return listById;
}

async function delQualificacao(id: string) {
  const deleteQualificacao = await prismaClient.qualificacao.delete({
    where: { id: id },
  });
  return deleteQualificacao;
}

async function UpdateDescription(id: string, data: QualificacaoSchema) {
  const updateDescription = await prismaClient.qualificacao.update({
    where: { id: id },
    data: {
      descricao: data.descricao,
    },
    select: {
      id: false,
      curriculoId: false,
      descricao: true,
      curriculo: false,
      createdAt: false,
      updatedAt: true,
    },
  });
  return updateDescription;
}

export {
  makeAQualificacao,
  listQualificacao,
  ListQualificacaoById,
  UpdateDescription,
  delQualificacao,
};
