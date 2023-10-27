export default class EmailAlreadyExistsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EmailAlreadyExistsError";
  }
}
