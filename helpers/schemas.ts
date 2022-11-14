import * as Yup from 'yup';

// min 5 characters, 1 uppercase, 1 lowercase, 1 number,
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const baseSchema = Yup.object().shape({
  email: Yup
    .string()
    .required("Please include a valid email address")
    .email("This is an invalid email address"),
  password: Yup
    .string()
    .min(5)
    .matches(passwordRules, {message: "Password must contain at least 5 characters, 1 uppercase, 1 lowercase, 1 number"})
    .required("Sorry the password is required")
});