import { Request, Response } from "express";
import IdiomaSchema from "../../interfaces/idioma/idioma.interface";
import { createIdioma } from "../../service/idioma/createIdioma.service";

async function createIdiomaController(req: Request, res: Response) {
  try {
    const idioma: IdiomaSchema = req.body;
    const response = await createIdioma(idioma);
    res.status(response.statusCode).json(response.body);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao criar o idioma" });
  }
}
export { createIdiomaController };
