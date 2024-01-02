interface Task {
  name: string;
  done: boolean;
}

export interface CheckBoxProps {
  task: Task;
  onChange: (event: any) => void;
}
