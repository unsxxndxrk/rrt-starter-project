import { Box, Button } from "@material-ui/core";
import { connect, ConnectedProps, useDispatch } from "react-redux";
import { Namespaces } from "i18n";
import { decreaseCounter, increaseCounter } from "store/Counter/actions";
import { RootState } from "store";
import { useSecondaryButtonStyles } from "styles/SecondaryButton";
import { useCounterStyles } from "./Counter.styles";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation(Namespaces.Examples);

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
          {t("counter.buttons.decrease")}
        </Button>
        <Button
          type="button"
          variant="contained"
          className={secondaryButtonStyles.root}
          onClick={handleIncrease}
        >
          {t("counter.buttons.increase")}
        </Button>
      </div>
    </Box>
  );
};

export default connector(Counter);
