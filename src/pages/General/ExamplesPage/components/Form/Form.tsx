import { Button, TextField } from "@material-ui/core";
import { useFormik } from "formik/dist/Formik";
import React from "react";
import { useSecondaryButtonStyles } from "../../../../../styles/SecondaryButton";
import { formInitialValues, FormValidationSchema } from "./Form.consts";
import { useFormStyles } from "./Form.styles";
import { FormValues } from "./Form.types";

const Form = () => {
  const classes = useFormStyles();
  const secondaryButtonStyles = useSecondaryButtonStyles();

  const onFormSubmit = (data: FormValues) => {
    console.log("Form submited: ", data);
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
    // handleBlur,
    handleChange,
    // handleSubmit,
    // setFieldValue,
    submitForm,
    // resetForm,
  } = formik;

  const hasError = (name: keyof FormValues): boolean => {
    return !!(touched[name] && errors[name]);
  };

  return (
    <form onSubmit={submitForm}>
      <div className={classes.formGroup}>
        <TextField
          id="email"
          name="email"
          placeholder="youremail@example.com"
          error={hasError("email")}
          fullWidth
          type="email"
          value={values.email}
          onChange={handleChange}
        />
        {hasError("email") && (
          <div className={classes.errorLine}>{"Error"}</div>
        )}
      </div>
      <div className={classes.formGroup}>
        <TextField
          id="password"
          name="password"
          placeholder="Password"
          error={hasError("password")}
          fullWidth
          type="password"
          value={values.password}
          onChange={handleChange}
        />
        {hasError("password") && (
          <div className={classes.errorLine}>{"Error"}</div>
        )}
      </div>
      <div className={classes.formGroup}>
        <Button
          type="submit"
          variant="contained"
          className={secondaryButtonStyles.root}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Form;
