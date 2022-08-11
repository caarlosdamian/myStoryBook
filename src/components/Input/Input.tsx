import React from "react";
import './Input.css';

interface Props {
  placeholder?: string;
  size?: "small" | "medium" | "large";
  type?: "text" | "password";
}

export const Input = ({
  placeholder = "no placeholder",
  size = "medium",
  type = "text",
  ...rest
}: Props) => {
  return (
    <input placeholder={placeholder} type={type} className={`input ${size}`}  {...rest}/>
  );
};
