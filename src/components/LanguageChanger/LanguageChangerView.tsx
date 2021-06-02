import { useLanguageChangerStyles } from "./LanguageChanger.styles";
import cx from "classnames";

type LanguageChangerViewProps = {
  appLanguages: string[];
  currentLanguage: string;
  onLanguageChange: (nextLang: string) => void;
};

function LanguageChangerView(props: LanguageChangerViewProps) {
  const { appLanguages, currentLanguage, onLanguageChange } = props;
  const classes = useLanguageChangerStyles();

  return (
    <div className={classes.root}>
      {appLanguages.length &&
        appLanguages.map((l: string, key: number) => (
          <div className={classes.langWrap} key={key}>
            <div
              className={cx(classes.lang, {
                active: currentLanguage === l,
              })}
              onClick={() => onLanguageChange(l)}
            >
              {l}
            </div>
            {appLanguages.length - 1 !== appLanguages.indexOf(l) && <>|</>}
          </div>
        ))}
    </div>
  );
}

export default LanguageChangerView;
