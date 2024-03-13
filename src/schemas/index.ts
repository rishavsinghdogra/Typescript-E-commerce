import * as yup from "yup";

const passwordRules = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/;

export const basicSchema = yup.object().shape({
  name: yup.string().required("User name is required!"),
  password: yup
    .string()
    .min(6)
    .matches(passwordRules, { message: " Tip : Always have a strong passwrod!" })
    .required("Required"),
});
