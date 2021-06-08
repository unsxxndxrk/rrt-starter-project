import { useLanguageChangerStyles } from "./LanguageChanger.styles";
import cx from "classnames";
import { appLanguages } from "constants/appLanguages";
import { useTranslation } from "react-i18next";

function LanguageChanger() {
  const { i18n } = useTranslation();
  const classes = useLanguageChangerStyles();
  const languages = Object.values(appLanguages);
  const currentLanguage = i18n.language;

  const handgeLanguageChange = (nextLang: string) => {
    i18n.changeLanguage(nextLang);
  };

  return (
    <div className={classes.root}>
      {languages.map((lang, key) => (
        <div className={classes.langWrap} key={key}>
          <div
            className={cx(classes.lang, {
              active: currentLanguage === lang,
            })}
            onClick={() => handgeLanguageChange(lang)}
          >
            {lang}
          </div>
          {languages.length - 1 !== languages.indexOf(lang) && <>|</>}
        </div>
      ))}
    </div>
  );
}

export default LanguageChanger;
