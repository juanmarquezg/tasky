import { ReactNode } from "react";

export interface ButtonProps {
  type?: "submit" | "reset" | "button" | undefined;
  children: ReactNode;
  onClick?: () => void;
}
