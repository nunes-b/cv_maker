import prismaClient from "../utils/prisma-client";
import Curriculo from "../interfaces/curriculo/curriculo.interface";

async function BuildCv(
  userId: string,
  nome: string,
  dataNascimento: string,
  telefone: string,
  perfilLinkedIn: string,
  cidade: string,
  areaAtuacao: string
): Promise<Curriculo> {
  const newCv = await prismaClient.curriculo.create({
    data: {
      userId: userId,
      nome: nome,
      dataNascimento: dataNascimento,
      telefone: telefone || "",
      perfilLinkedIn: perfilLinkedIn || "",
      cidade: cidade || "",
      areaAtuacao: areaAtuacao || "",
    },
  });
  return newCv;
}

async function ListCV() {
  const listCv = await prismaClient.curriculo.findMany();
  return listCv;
}

async function listCVById(id: string) {
  const listById = await prismaClient.curriculo.findUnique({
    where: { id: id },
  });
  return listById;
}

async function delCV(id: string) {
  const deleteCurriculo = await prismaClient.curriculo.delete({
    where: { id: id },
  });
  return deleteCurriculo;
}

async function updateCV(id: string, data: Curriculo) {
  try {
    const updatedCv = await prismaClient.curriculo.update({
      where: { id: id },
      data: {
        nome: data.nome,
        dataNascimento: data.dataNascimento,
        telefone: data.telefone || "",
        perfilLinkedIn: data.perfilLinkedIn || "",
        cidade: data.cidade || "",
        areaAtuacao: data.areaAtuacao || "",
      },
    });
    return updatedCv;
  } catch (error) {
    throw new Error(`Erro ao atualizar o currículo: ${error}`);
  }
}

export { BuildCv, ListCV, listCVById, updateCV, delCV };
