import { makeStyles, Theme } from "@material-ui/core/styles";

const useAboutStyles = makeStyles((theme: Theme) => ({
  description: {
    marginTop: "15px",
    maxWidth: "500px",

    "& b": {
      color: theme.palette.primary.main,
    },
  },
  link: {
    color: theme.palette.secondary.main,
    marginTop: "15px",
    display: "block",
    fontWeight: "bold",

    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export { useAboutStyles };
