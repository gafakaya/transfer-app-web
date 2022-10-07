import { FieldHookConfig, useField } from "formik";
import React from "react";
import { Label } from "../labels";

type InputProps = FieldHookConfig<string> & {
  label?: string;
  placeholder?: string;
};

export const Input = ({ label, placeholder, ...props }: InputProps) => {
  const [field, meta] = useField(props);
  const { type, className } = props;

  const hasError = Boolean(meta.touched && meta.error);

  return (
    <div className={`flex flex-col`}>
      <Label htmlFor={field.name}>{label}</Label>
      <input
        id={field.name}
        placeholder={placeholder}
        type={type}
        {...field}
        className={`
        ${className} rounded bg-skin-secondary w-full mr-1 p-1.5 outline-none border-0 text-sm focus:outline-none
        cursor-pointer`}
      />
      {hasError && <div>{meta.error}</div>}
    </div>
  );
};
