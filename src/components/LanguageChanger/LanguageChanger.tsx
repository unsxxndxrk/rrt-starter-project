import { Languages } from "types/common/Languages";
import { enumToStringArray } from "utils/enumToStringArray";
import { useTranslation } from "react-i18next";
import { LanguageChangerView } from "./LanguageChangerView";

function LanguageChanger() {
  const { i18n } = useTranslation();

  const appLanguages = enumToStringArray(Languages);
  const currentLanguage = i18n.language;

  const handgeLanguageChange = (nextLang: string) => {
    i18n.changeLanguage(nextLang);
  };

  return (
    <LanguageChangerView
      appLanguages={appLanguages}
      currentLanguage={currentLanguage}
      onLanguageChange={handgeLanguageChange}
    />
  );
}

export { LanguageChanger };
