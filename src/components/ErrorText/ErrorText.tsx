import { useErrorTextStyles } from "./ErrorText.styles";
import cx from "classnames";
import { Namespaces } from "i18n";
import { useTranslation } from "react-i18next";

type ErrorTextProps = {
  text?: string;
  className?: string;
  type?: "unexpected";
  variant?: "tiny";
};

function ErrorText(props: ErrorTextProps) {
  const { text, className, type, variant } = props;
  const classes = useErrorTextStyles();
  const rootClasses = cx(
    classes.root,
    {
      [classes.tiny]: variant === "tiny",
    },
    className,
  );
  const { t } = useTranslation(Namespaces.Common);

  return (
    <div className={rootClasses}>
      {type === "unexpected" ? t("errors.unexpected") : text ? text : null}
    </div>
  );
}

export default ErrorText;
