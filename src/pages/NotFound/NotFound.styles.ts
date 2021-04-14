import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useNotFoundStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      paddingBottom: "100px",
    },
    code: {
      fontSize: "200px",
      fontWeight: "bold",
    },
  }),
);

export { useNotFoundStyles };
