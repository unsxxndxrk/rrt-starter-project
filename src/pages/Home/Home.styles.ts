import { makeStyles, Theme } from "@material-ui/core/styles";

const useHomeStyles = makeStyles((theme: Theme) => ({
  h1: {
    fontSize: "40px",
  },
  logoWrap: {
    display: "flex",
    justifyContent: "center",
    padding: "50px 0",

    "& img": {
      height: "150px",
    },
  },
  buttonBox: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "30px",
  },
  textWrap: {
    paddingTop: "10px",
    display: "flex",
    justifyContent: "center",
  },
  text: {
    width: "700px",
    fontSize: "18px",
  },
}));

export { useHomeStyles };
