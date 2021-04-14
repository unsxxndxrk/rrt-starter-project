import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useFormStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      width: "400px",
      margin: "0 auto",
    },
    formGroup: {
      marginBottom: "20px",
      "& button": {
        width: "100%",
      },
      "& .MuiFormLabel-root": {
        color: theme.palette.text.primary + " !important",

        "&.Mui-error": {
          color: theme.palette.error.main + " !important",
        },
      },
    },
    errorLine: {
      color: theme.palette.error.main,
      paddingTop: "5px",
    },
  }),
);

export { useFormStyles };
