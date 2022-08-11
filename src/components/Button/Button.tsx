import React from "react";
import './Button.css';

export interface ButtonProps {
  variant?: string;
  children: any;
}

export const Button = ({
  variant = "primary",
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
};
