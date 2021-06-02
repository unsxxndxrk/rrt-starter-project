import { Button, TextField } from "@material-ui/core";
import { FormikProps } from "formik";
import { Namespaces } from "i18n";
import { useFormStyles } from "./Form.styles";
import { FormValues } from "./Form.types";
import { useTranslation } from "react-i18next";

type FormViewProps = FormikProps<FormValues> & {
  hasError: (name: keyof FormValues) => boolean;
};

function FormView(props: FormViewProps) {
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    hasError,
  } = props;

  const { t } = useTranslation(Namespaces.Examples);
  const classes = useFormStyles();

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div className={classes.formGroup}>
        <TextField
          id="email"
          name="email"
          error={hasError("email")}
          fullWidth
          type="email"
          value={values.email}
          onChange={handleChange}
          label={t("form.fields.email.placeholder")}
          variant="outlined"
          onBlur={handleBlur}
        />
        {hasError("email") && (
          <div className={classes.errorLine}>
            {t(`form.fields.email.errors.${errors.email}`)}
          </div>
        )}
      </div>
      <div className={classes.formGroup}>
        <TextField
          id="password"
          name="password"
          error={hasError("password")}
          fullWidth
          type="password"
          value={values.password}
          onChange={handleChange}
          label={t("form.fields.password.placeholder")}
          variant="outlined"
          onBlur={handleBlur}
        />
        {hasError("password") && (
          <div className={classes.errorLine}>
            {t(`form.fields.password.errors.${errors.password}`)}
          </div>
        )}
      </div>
      <div className={classes.formGroup}>
        <Button type="submit" variant="contained" color="secondary">
          {t("form.buttons.submit")}
        </Button>
      </div>
    </form>
  );
}

export default FormView;
