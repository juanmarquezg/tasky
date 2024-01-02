import { FC } from "react";

import { CheckBoxProps } from "./CheckBox.types";

export const CheckBox: FC<CheckBoxProps> = ({ task, onChange }) => {
  return (
    <input
      type="checkbox"
      checked={task.done}
      onChange={() => onChange(task)}
    />
  );
};
