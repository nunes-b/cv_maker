import { listCVById } from "../../model/curriculo";

async function listByIdCVService(id: string) {
  try {
    if (!id) {
      return {
        statusCode: 404,
        body: {
          mensagem: "Erro ao encontrar currículo",
        },
      };
    }

    const cv = await listCVById(id);

    if (!cv) {
      return {
        statusCode: 404,
        body: {
          mensagem: "Erro ao encontrar currículo",
        },
      };
    }

    return {
      statusCode: 200,
      body: {
        curriculo: cv,
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: {
        message: "Erro ao listar currículo",
      },
    };
  }
}

export { listByIdCVService };
