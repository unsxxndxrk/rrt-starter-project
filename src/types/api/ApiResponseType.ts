export type ApiResponseType<T = any> = {
  error: boolean;
  message: string;
  payload: T;
};
