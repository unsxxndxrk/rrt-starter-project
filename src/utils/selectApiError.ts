import { ApiError } from "constants/api/apiErrors";

export const selectApiError = (message: string = ""): ApiError => {
  return (
    Object.values(ApiError).filter((e) => message === e)[0] ||
    ApiError.Unexpected
  );
};
