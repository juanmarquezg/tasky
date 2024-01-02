import { FC } from "react";

import "./Button.css";
import { ButtonProps } from "./Button.types";

export const Button: FC<ButtonProps> = ({ type, children, onClick }) => {
  const addClassName = onClick ? "add clean" : "add";
  return (
    <button className={addClassName} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
