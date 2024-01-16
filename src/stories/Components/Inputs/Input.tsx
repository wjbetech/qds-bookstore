import React, { useState } from 'react';
import { Input as qdsInput } from "@quotalab/qds";
``
interface InputProps {

  // label for the input box
  label?: string;

  // the value for the input box
  value?: string;

  // the type of the input box
  type?: string;

  // placeholder for the input box
  placeholder?: string;

  // max input length
  maxLength?: number;

  // min input length
  minLength?: number;

  // onChange handler
  onChange?: (value: string) => void;

}

export const Input: React.FC<InputProps> = ({
  label,
  type,
  value,
  placeholder,
  maxLength = 15,
  minLength = 5,
  onChange,
  ...props
}) => {

  const QdsInput = qdsInput;

  return (
    <>
      <label>{label}</label>
      <QdsInput
        label={label}
        value={value}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      />
      <style jsx>{`input { margin-top: 10px }`}</style>
    </>
  );
};
