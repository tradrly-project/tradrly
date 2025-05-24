import { object, string } from "zod";

export const RegisterSchema = object({
  name: string().min(1, "Harus lebih dari 1 huruf !"),
  username: string().min(1, "Harus lebih dari 1 huruf !"),
  email: string().email("Email tidak valid"),
  password: string()
    .min(3, "Password harus lebih dari 3 karakter")
    .max(5, "Password harus lebih dari 5 karakter"),
  ConfirmPassword: string()
    .min(3, "Password harus lebih dari 3 karakter")
    .max(5, "Password harus lebih dari 5 karakter"),
}).refine((data) => data.password === data.ConfirmPassword, {
  message: "Password tidak sama",
  path: ["ConfirmPassword"],
});
