import { makeStyles } from "@material-ui/core/styles";

const useCounterStyles = makeStyles({
  counterBox: {
    marginBottom: "15px",
  },
  counter: {
    textAlign: "center",
    fontSize: "50px",
    fontWeight: "bold",
  },
  buttonBox: {
    width: "max-content",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "& button": {
      margin: "0 5px",
    },
  },
});

export { useCounterStyles };
