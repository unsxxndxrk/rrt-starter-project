import { makeStyles, Theme } from "@material-ui/core/styles";

const useErrorTextStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.error.main,
    fontSize: "16px",
    fontWeight: 400,
    padding: "10px 0",
    textAlign: "left",
  },
  tiny: {
    fontSize: "13px",
    padding: "5px 0",
  },
}));

export { useErrorTextStyles };
