import { delidioma } from "../../model/idioma";

async function deleteIdiomaService(id: string) {
  try {
    const idiomaDeleted = await delidioma(id);
    return {
      statusCode: 200,
      body: {
        deleted: idiomaDeleted,
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: {
        message: "Erro ao deletar idioma",
      },
    };
  }
}

export { deleteIdiomaService };
