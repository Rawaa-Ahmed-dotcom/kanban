import {  FieldValues } from "react-hook-form";
import { FormRowProps } from "@/lib/types";
import FieldError from "./FieldError";

const FormRow = <T extends FieldValues>({
  register,
  name,
  label,
  id,
  type,
  placeholder,
  error
}: FormRowProps<T>) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label
        htmlFor={id}
        className="font-medium text-[14px] text-(--gray-700) w-full"
      >
        {label}
      </label>
      <input
        type={type}
        {...register(name)}
        className="px-3.5 py-2.5 rounded-lg border border-(--gray-300) w-full placeholder:font-normal placeholder:text-[16px] text-(--gray-500) transition-all duration-300 outline-none focus:ring-1 focus:ring-(--gray-700)"
        placeholder={placeholder}
        autoComplete="off"
      />
      {error && <FieldError message={error} id={name}/>}
    </div>
  );
};

export default FormRow;
