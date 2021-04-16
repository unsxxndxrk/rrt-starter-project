import axios from "axios";
import { jsonHeaders } from "constants/jsonHeaders";
import { API_ENDPOINT } from "constants/settings";

export const API = axios.create({
  baseURL: API_ENDPOINT,
  headers: jsonHeaders,
});
