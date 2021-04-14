import * as Yup from "yup";
import { emailRegExp, passwordRegExp } from "constants/regExps";
import { FormValues } from "./Form.types";
import { ValidationRule } from "constants/validationRules";

export const formInitialValues: FormValues = {
  email: "",
  password: "",
};

export const formValidationSchema = Yup.object({
  email: Yup.string()
    .trim()
    .matches(emailRegExp, ValidationRule.InvalidEmailFormat)
    .required(ValidationRule.Required),
  password: Yup.string()
    .trim()
    .matches(passwordRegExp, ValidationRule.InvalidPasswordFormat)
    .required(ValidationRule.Required),
});
