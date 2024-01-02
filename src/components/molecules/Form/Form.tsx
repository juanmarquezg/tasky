import { FC } from "react";

import { FormProps } from "./Form.types";
import { Button, Input } from "../../atoms";

export const Form: FC<FormProps> = ({
  value,
  handleSubmit,
  handleInputChange
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Input value={value} onChange={handleInputChange} />
      <Button>Agregar tarea</Button>
    </form>
  );
};
