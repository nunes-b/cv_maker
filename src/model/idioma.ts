import IdiomaSchema from "../interfaces/idioma/idioma.interface";
import prismaClient from "../utils/prisma-client";

async function makeAidioma(
  nome: string,
  curriculoId: string,
  nivel: string
): Promise<IdiomaSchema> {
  const idioma = await prismaClient.idioma.create({
    data: {
      curriculoId,
      nome,
      nivel,
    },
    select: {
      id: true,
      curriculoId: true,
      nome: true,
      nivel: true,
      createdAt: true,
    },
  });
  return idioma;
}

async function listidioma() {
  const responselist = await prismaClient.idioma.findMany({
    select: {
      id: true,
      nome: true,
      nivel: true,
      updatedAt: true,
    },
  });
  return responselist;
}

async function ListidiomaById(id: string) {
  const listById = await prismaClient.idioma.findUnique({
    where: { id: id },
    select: {
      id: true,
      nome: true,
      nivel: true,
      updatedAt: true,
    },
  });
  return listById;
}

async function delidioma(id: string) {
  const deleteidioma = await prismaClient.idioma.delete({
    where: { id: id },
  });
  return deleteidioma;
}

async function updateIdioma(id: string, data: IdiomaSchema) {
  const update = await prismaClient.idioma.update({
    where: { id: id },
    data: {
      nome: data.nome,
      nivel: data.nivel,
    },
    select: {
      id: true,
      nome: true,
      nivel: true,
      updatedAt: true,
    },
  });
  return update;
}

export { makeAidioma, listidioma, ListidiomaById, updateIdioma, delidioma };
