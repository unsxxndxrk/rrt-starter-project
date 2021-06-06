import axios, { AxiosResponse } from "axios";
import { ApiError } from "constants/api/apiErrors";
import { jsonHeaders } from "constants/api/jsonHeaders";
import { API_ENDPOINT } from "constants/settings";
import { ApiResponseType } from "types/api/ApiResponseType";

export const API = axios.create({
  baseURL: API_ENDPOINT,
  headers: jsonHeaders,
});

API.interceptors.response.use(
  (response: AxiosResponse<ApiResponseType<any>>) => {
    if (response.data.error) {
      return Promise.reject({
        config: response.config,
        response: {
          data: {
            message: response.data.message || ApiError.Unexpected,
            error: true,
            payload: [],
          },
        },
        isAxiosError: false,
      });
    }
    return response;
  },
);
