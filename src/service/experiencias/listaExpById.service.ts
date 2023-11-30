import { listExpsById } from "../../model/experiencia";

async function listExpByIdService(id: string) {
  try {
    if (!id) {
      return {
        statusCode: 404,
        body: {
          mensagem: "Erro ao encontrar experiência",
        },
      };
    }

    const Exp = await listExpsById(id);

    if (!Exp) {
      return {
        statusCode: 404,
        body: {
          mensagem: "Não foi possivel encontrar sua experiência",
        },
      };
    }

    return {
      statusCode: 200,
      body: {
        experiência: Exp,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: {
        message: "Erro ao listar experiência",
      },
    };
  }
}

export { listExpByIdService };
