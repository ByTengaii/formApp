import { z, ZodType } from "zod"; // Add new import

export type UserFormData = {
  email: string;
  password: string;
};

export const UserFormSchema: ZodType<UserFormData> = z
  .object({
    email: z.string().email({ message: "Invalid email" }),
    password: z
      .string()
  }).required().strict();


export type UserData = {
  email: string;
  uid: string;
  name: string;
  surname: string;
  title: string;
};