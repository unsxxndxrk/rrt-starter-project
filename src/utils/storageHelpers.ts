import { APP_DEFAULT_LANGUAGE } from "../constants/settings";

export const uiLanguage = (() => {
  const getKey = () => "i18nextLng";
  const get = () => localStorage.getItem(getKey()) || APP_DEFAULT_LANGUAGE;
  const set = (value: string) => localStorage.setItem(getKey(), value);
  return {
    get,
    set,
  };
})();
