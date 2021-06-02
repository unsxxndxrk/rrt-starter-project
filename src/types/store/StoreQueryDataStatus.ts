import { ApiError } from "constants/apiErrors";

export type StoreQueryDataStatusError = {
  message: ApiError;
};

export type StoreQueryDataStatus = {
  fetching: boolean;
  error: StoreQueryDataStatusError | null;
};
