interface Task {
  name: string;
  done: boolean;
}

interface TableGeneralProps {
  checked?: boolean;
  onChange: (event: Task) => void;
}

export interface TableProps extends TableGeneralProps {
  tasks: Task[];
}

export interface TableRowProps extends TableGeneralProps {
  task: Task;
}
