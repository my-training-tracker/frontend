import React, { InputHTMLAttributes } from 'react';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: CustomInputProps) {
  return <input className="border rounded-lg py-1 px-2" {...props} />;
}
