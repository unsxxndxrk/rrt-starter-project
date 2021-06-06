import { ApiError } from "constants/api/apiErrors";

export type StoreQueryDataStatusError = {
  message: ApiError;
};

export type StoreQueryDataStatus = {
  fetching: boolean;
  error: StoreQueryDataStatusError | null;
};
