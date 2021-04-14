import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useHeaderStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "30px 0",
      position: "relative",
    },
    nav: {
      "& a": {
        color: theme.palette.primary.main,
        textTransform: "uppercase",
        fontSize: "16px",
        transition: "all .3s ease",
        "&:hover": {
          color: theme.palette.secondary.main,
        },
      },
    },
  }),
);

export { useHeaderStyles };
