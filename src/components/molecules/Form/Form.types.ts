import { ChangeEvent, FormEvent } from "react";

export interface FormProps {
  value: string | number;
  handleSubmit:  (event: FormEvent<HTMLFormElement>) => void;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
