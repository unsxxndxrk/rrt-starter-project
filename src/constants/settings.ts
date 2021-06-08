import { appLanguages } from "./appLanguages";

export const APP_DEFAULT_LANGUAGE: string = appLanguages.en;
export const API_ENDPOINT: string =
  process.env.REACT_APP_API_ENDPOINT || window.location.origin;
