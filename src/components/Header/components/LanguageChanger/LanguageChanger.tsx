import { Languages } from "types/common/Languages";
import { enumToStringArray } from "utils/enumToStringArray";
import { useLanguageChangerStyles } from "./LanguageChanger.styles";
import { useTranslation } from "react-i18next";
import cx from "classnames";

const LanguageChanger = () => {
  const appLanguages = enumToStringArray(Languages);
  const classes = useLanguageChangerStyles();

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handgeLanguageChange = (nextLang: string) => {
    i18n.changeLanguage(nextLang);
  };

  return (
    <div className={classes.root}>
      {appLanguages.length &&
        appLanguages.map((l: string, key: number) => (
          <div className={classes.langWrap} key={key}>
            <div
              className={cx(classes.lang, {
                active: currentLanguage === l,
              })}
              onClick={() => handgeLanguageChange(l)}
            >
              {l}
            </div>
            {appLanguages.length - 1 !== appLanguages.indexOf(l) && <>|</>}
          </div>
        ))}
    </div>
  );
};

export default LanguageChanger;
