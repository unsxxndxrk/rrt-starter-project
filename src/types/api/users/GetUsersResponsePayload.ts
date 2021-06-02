import { ApiResponseType } from "../ApiResponseType";
import { User } from "./User";

export type GetUsersResponsePayload = ApiResponseType<User[]>;
