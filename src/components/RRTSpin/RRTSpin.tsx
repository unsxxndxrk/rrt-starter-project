import React, { useEffect, useMemo, useRef, useState } from "react";
import { useRRTSpinStyles } from "./RRTSpin.styles";
import cx from "classnames";
import { debounce as _debounce } from "lodash";
import { Portal } from "@material-ui/core";
import RRTCircularProgress from "components/RRTCircularProgress/RRTCircularProgress";

export type RRTSpinProps = {
  className?: string;
  containerClassName?: string;
  spinClassName?: string;
  spinning: boolean;
  children: React.ReactNode;
  indicator?: null | React.ReactNode;
  size?: number;
  delay?: number;
  enterDelay?: number;
  leaveDelay?: number;
  indicatorPortal?:
    | React.ReactInstance
    | (() => React.ReactInstance | null)
    | null;
};

function RRTSpin(props: RRTSpinProps) {
  const {
    className,
    containerClassName,
    spinClassName,
    spinning,
    children,
    indicator,
    size = 40,
    delay = 0,
    enterDelay = 0,
    leaveDelay = 0,
    indicatorPortal,
  } = props;

  const classes = useRRTSpinStyles();
  const enterDelayRef = useRef<number>(enterDelay);
  const leaveDelayRef = useRef<number>(leaveDelay);
  const delayRef = useRef<number>(delay);
  const [innerSpinning, setSpinning] = useState<boolean>(spinning);

  const debouncedSetSpinning = useMemo(
    () =>
      _debounce(
        () => setSpinning(true),
        // TODO possible issue here (if i pass enterDelay={0} it may take delay prop value)
        enterDelayRef.current || delayRef.current || 0,
      ),
    [],
  );

  const debouncedRemoveSpinning = useMemo(
    () =>
      _debounce(
        () => setSpinning(false),
        // TODO possible issue here (if i pass leaveDelay={0} it may take delay prop value)
        leaveDelayRef.current || delayRef.current || 0,
      ),
    [],
  );

  useEffect(() => {
    debouncedSetSpinning.cancel && debouncedSetSpinning.cancel();
    debouncedRemoveSpinning.cancel && debouncedRemoveSpinning.cancel();
    if (spinning) {
      debouncedSetSpinning();
    } else {
      debouncedRemoveSpinning();
    }
  }, [debouncedRemoveSpinning, debouncedSetSpinning, spinning]);

  const renderIndicator = () => {
    if (indicator === null) {
      return null;
    }
    if (React.isValidElement(indicator)) {
      return indicator;
    }
    return <RRTCircularProgress />;
  };

  return (
    <div
      className={cx(classes.root, className, {
        [classes.spinning]: innerSpinning,
      })}
      style={{ minWidth: `${size + 20}px`, minHeight: `${size + 20}px` }}
    >
      {innerSpinning && (
        <Portal disablePortal={!indicatorPortal} container={indicatorPortal}>
          <div className={cx(classes.spin, spinClassName)}>
            {renderIndicator()}
          </div>
        </Portal>
      )}
      <div className={cx(classes.container, containerClassName)}>
        {children}
      </div>
    </div>
  );
}

export default RRTSpin;
