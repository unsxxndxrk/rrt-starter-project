import { useRRTCircularProgressStyles } from "./RRTCircularProgress.styles";
import cx from "classnames";
import { CircularProgress } from "@material-ui/core";

export type RRTCircularProgressProps = {
  className?: string;
  keepHeight?: string;
  color?: "primary" | "secondary" | "inherit";
};

function RRTCircularProgress(props: RRTCircularProgressProps) {
  const { className, color, keepHeight } = props;
  const classes = useRRTCircularProgressStyles();
  const rootClasses = cx(classes.root, className);

  return (
    <div
      className={rootClasses}
      style={{
        height: keepHeight,
      }}
    >
      <CircularProgress color={color || "primary"} />
    </div>
  );
}

export default RRTCircularProgress;
