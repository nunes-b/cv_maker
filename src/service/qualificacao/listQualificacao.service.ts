import { listQualificacao } from "../../model/qualificacao";

async function ListQualificacaoService() {
  try {
    const list = await listQualificacao();
    return {
      statusCode: 201,
      body: {
        Qualificação: list,
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: {
        message: "Falha ao listar qualificações.",
      },
    };
  }
}

export { ListQualificacaoService };
