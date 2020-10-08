import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useCounterStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    counterBox: {
      marginBottom: "15px",
    },
    counter: {
      textAlign: "center",
      fontSize: "50px",
      fontWeight: "bold",
    },
    buttonBox: {
      width: "200px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  }),
);

export { useCounterStyles };
