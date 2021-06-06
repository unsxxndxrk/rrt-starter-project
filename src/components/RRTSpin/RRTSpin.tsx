import React, { useEffect, useState } from "react";
import { useRRTSpinStyles } from "./RRTSpin.styles";
import cx from "classnames";
import RRTCircularProgress from "components/RRTCircularProgress/RRTCircularProgress";

export type RRTSpinProps = {
  className?: string;
  spinning: boolean;
  children: React.ReactNode;
};

function RRTSpin(props: RRTSpinProps) {
  const { className, spinning, children } = props;

  const classes = useRRTSpinStyles();
  const [isSpinning, setSpinning] = useState<boolean>(spinning);

  useEffect(() => {
    spinning ? setSpinning(true) : setSpinning(false);
  }, [spinning]);

  const rootClasses = cx(
    classes.root,
    { [classes.spinning]: isSpinning },
    className,
  );

  return (
    <div className={rootClasses}>
      {isSpinning && (
        <div className={classes.spin}>
          <RRTCircularProgress />
        </div>
      )}
      <div className={classes.container}>{children}</div>
    </div>
  );
}

export default RRTSpin;
