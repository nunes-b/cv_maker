import { delExp } from "../../model/experiencia";

async function deleteExpService(id: string) {
  try {
    const xpDeleted = await delExp(id);
    return {
      statusCode: 200,
      body: {
        deleted: xpDeleted,
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: {
        message: "Erro ao deletar experiência",
      },
    };
  }
}

export { deleteExpService };
