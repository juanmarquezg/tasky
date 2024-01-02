import { FC } from "react";

import './Form.css';
import { FormProps } from "./Form.types";
import { Button, Input } from "../../atoms";

export const Form: FC<FormProps> = ({
  value,
  handleSubmit,
  handleInputChange
}) => {
  return (
    <form onSubmit={handleSubmit} className="form">
      <Input value={value} onChange={handleInputChange} />
      <Button>Agregar tarea</Button>
    </form>
  );
};
