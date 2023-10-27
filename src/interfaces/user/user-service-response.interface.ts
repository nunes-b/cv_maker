import UserInterface from "./user.interface";

export default interface UserServiceResponse {
  statusCode: number;
  body: UserInterface[];
}
