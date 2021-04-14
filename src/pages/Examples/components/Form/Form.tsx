import { useFormik } from "formik";
import { formInitialValues, formValidationSchema } from "./Form.consts";
import { FormValues } from "./Form.types";
import { FormView } from "./FormView";

function Form() {
  const onFormSubmit = (data: FormValues) => {
    alert(`Email: ${data.email}\nPassword: ${data.password}`);
  };

  const formik = useFormik<FormValues>({
    validationSchema: formValidationSchema,
    enableReinitialize: true,
    initialValues: formInitialValues,
    onSubmit: onFormSubmit,
  });

  const hasError = (name: keyof FormValues): boolean => {
    return !!(formik.touched[name] && formik.errors[name]);
  };

  return <FormView {...formik} hasError={hasError} />;
}

export { Form };
