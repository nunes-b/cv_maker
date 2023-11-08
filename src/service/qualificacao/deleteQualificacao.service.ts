import { delQualificacao } from "../../model/qualificacao";

async function deleteQualificacaoService(id: string) {
  try {
    const qualificacao = await delQualificacao(id);
    return {
      statusCode: 200,
      body: {
        Deletado: qualificacao,
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: {
        message: "Erro ao deletar sua qualificacao",
      },
    };
  }
}

export { deleteQualificacaoService };
