export default interface CursoSchema {
  curriculoId: string;
  titulo: string;
  instituicao: string;
  local: string;
  urlCertificado: string;
  expire: boolean;
  data: Date;
}
