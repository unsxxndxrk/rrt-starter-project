import * as Yup from "yup";
import { emailRegExp, passwordRegExp } from "../../../../../constants/regExps";
import { FormValues } from "./Form.types";

export const formInitialValues: FormValues = {
  email: "",
  password: "",
};

export const FormValidationSchema = Yup.object({
  email: Yup.string()
    .trim()
    .matches(emailRegExp, "Invalid email format")
    .required("Should not be empty"),
  password: Yup.string()
    .trim()
    .matches(
      passwordRegExp,
      "Password must contain at least 8 characters, one uppercase letter, one lowercase letter and a digit",
    )
    .required("Should not be empty"),
});
