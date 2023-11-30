import { listidioma } from "../../model/idioma";

async function listIdiomasService() {
  try {
    const list = await listidioma();
    return {
      statusCode: 200,
      body: {
        Idiomas: list,
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: {
        message: "Falha ao listar idiomas.",
      },
    };
  }
}

export { listIdiomasService };
