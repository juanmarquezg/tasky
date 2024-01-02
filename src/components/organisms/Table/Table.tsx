import React from "react";
import { FC } from "react";

import './Table.css'
import { TableRow } from "./TableRow";
import { TableProps } from "./Table.types";

export const Table: FC<TableProps> = ({ tasks, checked = false, onChange }) => {
  const task = (e: boolean) =>
    tasks.map((task, index) => (
      <TableRow key={`${task.name}-${index}`} task={task} onChange={onChange} />
    ));

  return (
    <table className="table">
      <thead className="thead">
        <tr className="table-primary">
          <th>
            <p>Tareas </p>
          </th>
        </tr>
      </thead>
      <tbody className="tbody">{task(checked)}</tbody>
    </table>
  );
};
