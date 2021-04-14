import { Box, Button } from "@material-ui/core";
import { Namespaces } from "i18n";
import { useSecondaryButtonStyles } from "styles/SecondaryButton";
import { useCounterStyles } from "./Counter.styles";
import { useTranslation } from "react-i18next";

type CounterViewProps = {
  counter: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

function CounterView(props: CounterViewProps) {
  const { counter, onIncrease, onDecrease } = props;
  const { t } = useTranslation(Namespaces.Examples);
  const classes = useCounterStyles();
  const secondaryButtonStyles = useSecondaryButtonStyles();

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
          onClick={onDecrease}
        >
          {t("counter.buttons.decrease")}
        </Button>
        <Button
          type="button"
          variant="contained"
          className={secondaryButtonStyles.root}
          onClick={onIncrease}
        >
          {t("counter.buttons.increase")}
        </Button>
      </div>
    </Box>
  );
}

export { CounterView };
