import React from 'react'
import { Input as qdsInput } from "@quotalab/qds"

interface InputProps {

  // label for the input field
  label?: string;

  // value of the input field
  value?: string;

  // type of the input field
  type?: string;

  // input placeholder text
  placeholder?: string;

  // disabled option
  disabled?: boolean;

  // make input required
  required?: boolean;

  // max length of the input field
  maxLength?: number;

  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

// build our input ui component

export const Input = ({
  label = "",
  value,
  type,
  placeholder,
  disabled = false,
  required,
  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {},
  maxLength = 15,
  ...props
}: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <Input
        label={label}
        value={value}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        maxLength={maxLength}
        onChange={onChange}
        {...props}
      />
    </>
  );
}
