import { appLanguages } from "constants/appLanguages";
import { useTranslation } from "react-i18next";
import LanguageChangerView from "./LanguageChangerView";

function LanguageChanger() {
  const { i18n } = useTranslation();

  const languages = Object.values(appLanguages);
  const currentLanguage = i18n.language;

  const handgeLanguageChange = (nextLang: string) => {
    i18n.changeLanguage(nextLang);
  };

  return (
    <LanguageChangerView
      appLanguages={languages}
      currentLanguage={currentLanguage}
      onLanguageChange={handgeLanguageChange}
    />
  );
}

export default LanguageChanger;
