import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useAboutPageStyles = makeStyles((theme: Theme) =>
  createStyles({
    p: {
      marginTop: "15px",
      maxWidth: "500px",

      "& b": {
        color: theme.palette.primary.main,
      },
    },
    a: {
      color: theme.palette.secondary.main,
      marginTop: "15px",
      display: "block",
      fontWeight: "bold",

      "&:hover": {
        textDecoration: "underline",
      },
    },
  }),
);

export { useAboutPageStyles };
