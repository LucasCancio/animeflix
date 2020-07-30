import React from "react";
import styled from "styled-components";

interface InputProps {
  hasValue?: boolean;
}
const Input = styled.input<InputProps>`
  &:hover,
  &:focus {
    border-bottom-color: red;
  }
`;

const TextArea = styled.textarea`
  &:hover,
  &:focus {
    border-bottom-color: red;
  }
`;

interface FormFieldProps {
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: string;
  name: string;
  type: "text" | "color" | "textarea";
}

export default function FormField({
  label,
  name,
  onChange,
  type,
  value,
}: FormFieldProps): JSX.Element {
  return (
    <label>
      <span>{label}:</span>
      {type === "textarea" ? (
        <TextArea name={name} onChange={onChange} value={value} />
      ) : (
        <Input name={name} type={type} onChange={onChange} value={value} />
      )}
    </label>
  );
}
