import { FC } from "react";

import { ButtonProps } from "./Button.types";

export const Button: FC<ButtonProps> = ({ type, children, onClick }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};
