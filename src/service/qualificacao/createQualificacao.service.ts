import QualificacaoSchema from "../../interfaces/qualificacao/qualificacao.interface";
import { makeAQualificacao } from "../../model/qualificacao";

async function createQualificacaoService(data: QualificacaoSchema) {
  try {
    const newQualificacao = await makeAQualificacao(
      data.descricao,
      data.curriculoId
    );
    return {
      statusCode: 201,
      body: {
        data: newQualificacao,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      statusCode: 500,
      body: {
        message: "Falha ao criar currículo",
      },
    };
  }
}

export { createQualificacaoService };
