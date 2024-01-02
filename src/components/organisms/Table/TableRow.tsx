import React from "react";
import { FC } from "react";

import { TableRowProps } from "./Table.types";
import { CheckBox } from "../../atoms";

export const TableRow: FC<TableRowProps> = ({ task, checked, onChange }) => {
  const handleRowClick = () => {
    onChange(task);
  };

  return (
    <tr onClick={handleRowClick}>
      <td>
        <p>{task.name}</p>
        <CheckBox task={task} onChange={onChange} />
      </td>
    </tr>
  );
};
