import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useLanguageChangerStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "absolute",
      right: 0,
      top: "50%",
      transform: "translate(0, -50%)",
      display: "flex",
      alignItems: "center",
    },
    langWrap: {
      display: "flex",
      alignItems: "center",
    },
    lang: {
      textTransform: "uppercase",
      padding: "0 5px",
      cursor: "pointer",
      "&:hover": {
        color: theme.palette.primary.main,
      },
      "&.active": {
        color: theme.palette.primary.main,
      },
    },
  }),
);
