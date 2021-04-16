import { ApiError } from "constants/apiErrors";

export type StoreDataStatusError = {
  message: ApiError;
};

export type StoreDataStatus = {
  fetching: boolean;
  error: StoreDataStatusError | null;
};
