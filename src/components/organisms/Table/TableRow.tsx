import React from "react";
import { FC } from "react";

import { TableRowProps } from "./Table.types";
import { CheckBox } from "../../atoms";

export const TableRow: FC<TableRowProps> = ({ task, checked, onChange }) => {
  return (
    <tr>
      <td style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p>{task.name}</p>
        <CheckBox task={task} onChange={onChange} />
      </td>
    </tr>
  );
};
