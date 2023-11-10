import { listCursoById } from "../../model/curso";

async function listCursoByIdService(id: string) {
  try {
    if (!id) {
      return {
        statusCode: 404,
        body: {
          mensagem: "Erro ao encontrar curso",
        },
      };
    }

    const Curso = await listCursoById(id);

    if (!Curso) {
      return {
        statusCode: 404,
        body: {
          mensagem: "Não foi possivel encontrar o curso",
        },
      };
    }

    return {
      statusCode: 200,
      body: {
        curso: Curso,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: {
        message: "Erro ao listar curso",
      },
    };
  }
}

export { listCursoByIdService };
