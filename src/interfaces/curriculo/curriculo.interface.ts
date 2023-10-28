export default interface Curriculo {
  userId: string;
  nome: string;
  telefone: string | null;
  perfilLinkedIn: string | null;
  cidade: string | null;
  dataNascimento: string;
  areaAtuacao: string | null;
}
