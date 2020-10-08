import { Button, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import React from "react";
import { Namespaces } from "i18n";
import { useSecondaryButtonStyles } from "styles/SecondaryButton";
import { formInitialValues, FormValidationSchema } from "./Form.consts";
import { useFormStyles } from "./Form.styles";
import { FormValues } from "./Form.types";
import { useTranslation } from "react-i18next";

const Form = () => {
  const classes = useFormStyles();
  const secondaryButtonStyles = useSecondaryButtonStyles();

  const { t } = useTranslation(Namespaces.Examples);

  const onFormSubmit = (data: FormValues) => {
    alert(`Email: ${data.email}\nPassword: ${data.password}`);
  };

  const formik = useFormik<FormValues>({
    validationSchema: FormValidationSchema,
    enableReinitialize: true,
    initialValues: formInitialValues,
    onSubmit: onFormSubmit,
  });

  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
  } = formik;

  const hasError = (name: keyof FormValues): boolean => {
    return !!(touched[name] && errors[name]);
  };

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
        <Button
          type="submit"
          variant="contained"
          className={secondaryButtonStyles.root}
        >
          {t("form.buttons.submit")}
        </Button>
      </div>
    </form>
  );
};

export default Form;
