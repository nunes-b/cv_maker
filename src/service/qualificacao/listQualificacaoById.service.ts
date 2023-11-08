import { ListQualificacaoById } from "../../model/qualificacao";

async function listQualificacaoByIdService(id: string) {
  try {
    if (!id) {
      return {
        statusCode: 404,
        body: {
          mensagem: "Erro ao encontrar sua qualificação",
        },
      };
    }

    const qualificacao = await ListQualificacaoById(id);

    if (!qualificacao) {
      return {
        statusCode: 404,
        body: {
          mensagem: "Erro ao encontrar sua qualificação",
        },
      };
    }

    return {
      statusCode: 200,
      body: {
        Qualificação: qualificacao,
      },
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: {
        message: "Erro ao encontrar a sua qualificação",
      },
    };
  }
}

export { listQualificacaoByIdService };
