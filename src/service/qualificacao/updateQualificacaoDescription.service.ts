import { UpdateDescription } from "../../model/qualificacao";
import QualificacaoSchema from "../../interfaces/qualificacao/qualificacao.interface";

async function updateQualificacaoService(id: string, data: QualificacaoSchema) {
  try {
    const description = await UpdateDescription(id, data);
    return {
      statusCode: 200,
      body: {
        descricao_atualizada: description,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: {
        message: "Erro ao atualizar a descrição da sua qualificação",
      },
    };
  }
}

export { updateQualificacaoService };
