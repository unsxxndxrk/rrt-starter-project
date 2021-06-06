import { makeStyles } from "@material-ui/core/styles";

const useFetchDataReactQueryStyles = makeStyles({
  root: {
    padding: "10px 30px",
  },
  users: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  userTile: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "15px",
    width: "270px",
    height: "120px",
    marginBottom: "25px",
  },
  button: {
    margin: "0 auto",
    display: "block",
  },
});

export { useFetchDataReactQueryStyles };
