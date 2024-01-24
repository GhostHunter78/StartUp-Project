import * as yup from "yup";

const loginSchema = yup.object({
  username: yup
    .string()
    .required("Username is required")
    .min(4, "username must be 4 or more characters"),

  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must contain 8 or more characters")
    .max(25, "Password must contain less than characters"),

  confirmPassword: yup
    .string()
    .required("This field is required")
    .oneOf([yup.ref("password"), null], "Your passwords do not match."),

  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^5\d{8}$/, "Invalid Georgian phone number"),
});

export default loginSchema;
