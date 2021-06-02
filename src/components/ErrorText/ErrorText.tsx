import { useErrorTextStyles } from "./ErrorText.styles";
import cx from "classnames";
import { Namespaces } from "i18n";
import { useTranslation } from "react-i18next";

type ErrorTextProps = {
  text?: string;
  className?: string;
  type?: "unexpected";
};

function ErrorText(props: ErrorTextProps) {
  const { text, className, type } = props;
  const classes = useErrorTextStyles();
  const rootClasses = cx(classes.root, className);
  const { t } = useTranslation(Namespaces.Common);

  return (
    <div className={rootClasses}>
      {type === "unexpected"
        ? t("errors.unexpected_error")
        : text
        ? text
        : null}
    </div>
  );
}

export default ErrorText;
