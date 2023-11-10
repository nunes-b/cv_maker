import { listExps } from "../../model/experiencia";

async function listExpsService() {
  try {
    const list = await listExps();
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
        message: "Falha ao listar experiencias.",
      },
    };
  }
}

export { listExpsService };
