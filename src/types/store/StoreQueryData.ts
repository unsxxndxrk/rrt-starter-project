import { ApiError } from "constants/api/apiErrors";

type StoreQueryDataStatusError = {
  message: ApiError;
};

type StoreQueryDataStatus = {
  fetching: boolean;
  error: StoreQueryDataStatusError | null;
};

export type StoreQueryData<T> = StoreQueryDataStatus & {
  data: T;
};
