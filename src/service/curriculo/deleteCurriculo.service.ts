import { delCV } from "../../model/curriculo";

async function deleteCVService(id: string) {
  try {
    const cvDeleted = await delCV(id);
    return {
      statusCode: 200,
      body: {
        deleted: cvDeleted,
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: {
        message: "Erro ao deletar curriculo",
      },
    };
  }
}

export { deleteCVService };
