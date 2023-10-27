import UserInterface from "./user.interface";
export default interface UserByIdResponse {
  statusCode: number;
  body: UserInterface | null;
}
