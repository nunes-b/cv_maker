import { ListCV } from "../../model/curriculo";

async function ListCVService() {
  try {
    const list = await ListCV();
    return {
      statusCode: 201,
      body: {
        curriculos: list,
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: {
        message: "Falha ao listar curriculos.",
      },
    };
  }
}

export { ListCVService };
