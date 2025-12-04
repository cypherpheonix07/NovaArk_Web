import React, { useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, value, defaultValue, onChange, ...props }) => {
  // If no onChange is passed, auto‑configure with internal state
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e); // use parent handler if provided
    } else {
      setInternalValue(e.target.value); // fallback to internal state
    }
  };

  return (
    <div>
      {label && <label>{label}</label>}
      <input
        {...props}
        value={onChange ? value : internalValue}
        onChange={handleChange}
      />
    </div>
  );
};

