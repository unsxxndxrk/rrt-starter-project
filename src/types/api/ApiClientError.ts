import { AxiosError } from "axios";

export type ApiClientError<T = any> = AxiosError<T>;
