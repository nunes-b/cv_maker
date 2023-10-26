import { createUser } from "../model/user/user";

async function createUserInService(email: string, password: string) {
  try {
    const createdUser = await createUser(email, password);
    return {
      statusCode: 201,
      body: createdUser,
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Erro ao criar user em service " + error.message);
    } else {
      throw new Error("Erro desconhecido.");
    }
  }
}

export { createUserInService };
