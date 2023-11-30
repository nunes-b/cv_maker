import { delCurso } from "../../model/curso";

async function deleteCursoService(id: string) {
  try {
    const cursoDeleted = await delCurso(id);
    return {
      statusCode: 200,
      body: {
        deleted: cursoDeleted,
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: {
        message: "Erro ao deletar curso",
      },
    };
  }
}

export { deleteCursoService };
