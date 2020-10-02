import { makeStyles, Theme } from "@material-ui/core/styles";

export const useSecondaryButtonStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,

    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));
