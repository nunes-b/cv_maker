import { ListidiomaById } from "../../model/idioma";

async function listIdiomaById(id: string) {
  try {
    if (!id) {
      return {
        statusCode: 404,
        body: {
          mensagem: "Erro ao encontrar o idioma",
        },
      };
    }

    const Idioma = await ListidiomaById(id);

    if (!Idioma) {
      return {
        statusCode: 404,
        body: {
          mensagem: "Não foi possivel encontrar seu idioma",
        },
      };
    }

    return {
      statusCode: 200,
      body: {
        idioma: Idioma,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: {
        message: "Erro ao listar o idioma",
      },
    };
  }
}

export { listIdiomaById };
