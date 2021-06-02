import { makeStyles, Theme } from "@material-ui/core/styles";

const useRRTCircularProgressStyles = makeStyles((theme: Theme) => ({
  spinnerWrap: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    padding: "100px 0",
  },
}));

export { useRRTCircularProgressStyles };
