import { HTMLInputTypeAttribute } from 'react';

interface ControlledInputProps {
  type: HTMLInputTypeAttribute;
  name: string;
  placeHolder: string;
  onChange: () => void;
}

export function ControlledInput({
  type,
  name,
  placeHolder,
  onChange,
}: ControlledInputProps) {
  return (
    <input
      placeholder={placeHolder}
      type={type}
      // required
      name={name}
      className="input max-w-full"
      onChange={onChange}
    />
  );
}
