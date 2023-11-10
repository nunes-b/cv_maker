import { listCurso } from "../../model/curso";

async function listCursosService() {
  try {
    const list = await listCurso();
    return {
      statusCode: 200,
      body: {
        cursos: list,
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: {
        message: "Falha ao listar cursos.",
      },
    };
  }
}

export { listCursosService };
