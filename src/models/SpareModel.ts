import { z, ZodType } from "zod"; // Add new import
import { FieldErrors, Control, FieldValues } from "react-hook-form";
import { TextInputProps } from "react-native";

export type SpareFormData = {
    stockCode: string;
    usedAmount: string;
    materialDescription: string;
};

export type SpareFormFieldProps = {
    title: string;
    control: Control<FormData, any>;
    errors?: FieldErrors<FieldValues>;
    name: ValidFieldNames;
    placeholder: string;
    props?: TextInputProps
};


export type ValidFieldNames =
  | "stockCode"
  | "usedAmount"
  | "materialDescription";

export const SpareSchema: ZodType<SpareFormData> = z
  .object({
    stockCode: z.string({
      required_error: "Stock is required",
    }),
    usedAmount: z
      .string({
        required_error: "required field",
      }),
    materialDescription: z
    .string({
      required_error: "Material Description is required",
    }),
  }).required();