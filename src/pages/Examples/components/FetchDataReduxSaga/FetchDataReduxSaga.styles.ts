import { makeStyles } from "@material-ui/core";

const useFetchDataReduxSagaStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  btn: {
    display: "block",
    margin: "0 auto",
  },
  empty: {
    fontSize: "24px",
    opacity: ".3",
    marginBottom: "25px",
  },
  todo: {
    fontSize: "30px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    minWidth: "600px",
    marginBottom: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    marginBottom: "25px",
  },
});

export { useFetchDataReduxSagaStyles };
