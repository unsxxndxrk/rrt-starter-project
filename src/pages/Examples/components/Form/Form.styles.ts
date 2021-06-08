import { makeStyles, Theme } from "@material-ui/core/styles";

const useFormStyles = makeStyles((theme: Theme) => ({
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
}));

export { useFormStyles };
