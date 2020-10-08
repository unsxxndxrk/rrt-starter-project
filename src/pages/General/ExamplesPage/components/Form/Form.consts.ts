import * as Yup from "yup";
import { emailRegExp, passwordRegExp } from "constants/regExps";
import { FormValues } from "./Form.types";

export const formInitialValues: FormValues = {
  email: "",
  password: "",
};

export const FormValidationSchema = Yup.object({
  email: Yup.string()
    .trim()
    .matches(emailRegExp, "invalid_format")
    .required("empty"),
  password: Yup.string()
    .trim()
    .matches(passwordRegExp, "invalid_format")
    .required("empty"),
});
