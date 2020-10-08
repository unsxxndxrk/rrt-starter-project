import { Box, Button } from "@material-ui/core";
import React from "react";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import {
  decreaseCounter,
  increaseCounter,
} from "../../../../../redux/Counter/actions";
import { RootState } from "../../../../../redux/store";
import { useSecondaryButtonStyles } from "../../../../../styles/SecondaryButton";
import { useCounterStyles } from "./Counter.styles";

const mapStateToProps = (state: RootState) => ({
  counterReducer: state.counterReducer,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type CounterProps = PropsFromRedux & {};

const Counter = (props: CounterProps) => {
  const { counter } = props.counterReducer;
  const dispatch = useDispatch();
  const classes = useCounterStyles();
  const secondaryButtonStyles = useSecondaryButtonStyles();

  const handleIncrease = () => {
    dispatch(increaseCounter());
  };

  const handleDecrease = () => {
    dispatch(decreaseCounter());
  };

  return (
    <Box className={classes.root}>
      <div className={classes.counterBox}>
        <div className={classes.counter}>{counter}</div>
      </div>
      <div className={classes.buttonBox}>
        <Button
          type="button"
          variant="contained"
          className={secondaryButtonStyles.root}
          onClick={handleDecrease}
        >
          Decrease
        </Button>
        <Button
          type="button"
          variant="contained"
          className={secondaryButtonStyles.root}
          onClick={handleIncrease}
        >
          Increase
        </Button>
      </div>
    </Box>
  );
};

export default connector(Counter);
