import Curriculo from "../../interfaces/curriculo/curriculo.interface";
import { BuildCv } from "../../model/curriculo";

async function CreateCurriculo(data: Curriculo) {
  try {
    const newCurriculo = await BuildCv(
      data.userId,
      data.nome,
      data.dataNascimento,
      data.telefone !== null ? data.telefone : "",
      data.perfilLinkedIn !== null ? data.perfilLinkedIn : "",
      data.cidade !== null ? data.cidade : "",
      data.areaAtuacao !== null ? data.areaAtuacao : ""
    );
    return {
      statusCode: 201,
      body: {
        data: newCurriculo,
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: {
        message: "Falha ao criar currículo",
      },
    };
  }
}

export { CreateCurriculo };
