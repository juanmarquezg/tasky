import { FC } from "react";

import "./Input.css";
import { InputProps } from "./Input.types";

export const Input: FC<InputProps> = ({ value, onChange }) => {
  return (
    <input
      className="input"
      placeholder="Ingresa una nueva tarea..."
      value={value}
      onChange={onChange}
    />
  );
};
