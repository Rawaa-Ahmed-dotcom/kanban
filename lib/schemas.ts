import z from "zod";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])\S{8,64}$/;

export const LoginFormValidator = z.object({
  email: z.string().trim().min(1 , "Email is required").email("Please enter a valid email address"),
  password: z
    .string()
    .trim()
    .min(1, "Password is required")
    .min(8, "password must be at least 8 characters")
    .max(64, "password must be at most 64 charachters")
    .regex(
      passwordRegex,
      "Password must be 8-64 characters and include uppercase, lowercase, a number, and a special character",
    ),
});


export const SignupFormValidator = LoginFormValidator.extend({
  username : z.string().trim().min(1 , "Name is required").min(4 , "Name must be at least 4 charachters")
})