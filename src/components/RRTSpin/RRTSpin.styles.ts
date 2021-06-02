import { makeStyles } from "@material-ui/core/styles";

const useRRTSpinStyles = makeStyles({
  root: {
    position: "relative",
  },
  spin: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: "50%",
    left: "50%",
    padding: "10px",
    transform: "translate(-50%, -50%)",
    flexDirection: "column",
    zIndex: 1,
  },
  container: {
    transition: "filter .3s linear, opacity .3s linear",
    "$root$spinning &": {
      opacity: "0.5",
      userSelect: "none",
      pointerEvents: "none",
      filter: "blur(0.5px)",
    },
  },
  spinning: {},
});

export { useRRTSpinStyles };
