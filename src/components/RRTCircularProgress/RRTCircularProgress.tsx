import { useRRTCircularProgressStyles } from "./RRTCircularProgress.styles";
import cx from "classnames";
import { useTranslation } from "react-i18next";
import { Namespaces } from "i18n";
import { CircularProgress } from "@material-ui/core";

export type RRTCircularProgressProps = {
  wrapperClassName?: string;
  className?: string;
  keepHeight?: string;
  color?: "primary" | "secondary" | "inherit";
};

function RRTCircularProgress(props: RRTCircularProgressProps) {
  const { wrapperClassName, color, keepHeight } = props;
  const classes = useRRTCircularProgressStyles();
  const { t } = useTranslation(Namespaces.Common);

  const wrapperClasses = cx(classes.spinnerWrap, wrapperClassName);

  return (
    <div
      aria-label={t("labels.aria.spinner")}
      className={wrapperClasses}
      style={{
        height: keepHeight,
      }}
    >
      <CircularProgress color={color || "primary"} />
    </div>
  );
}

export default RRTCircularProgress;
