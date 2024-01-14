import React, { FC, useState, useCallback, useEffect } from "react";

import "./HomePage.css";
import { Table } from "../../organisms";
import { MemoizedButton, Button } from "../../atoms";
import { Header, Form } from "../../molecules";
import { useLocalStorageSet, useLocalStorageGet } from "../../../hooks";

interface Task {
  name: string;
  done: boolean;
}

export const HomePage: FC<{}> = () => {
  const { value: retrievedData } = useLocalStorageGet<Task[]>({ key: "tasks" });
  const { setValue } = useLocalStorageSet<Task[]>({
    key: "tasks"
  });

  const [taskItems, setTaskItems] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    setValue(taskItems);
  }, [setValue, taskItems]);

  useEffect(() => {
    if (retrievedData) {
      setTaskItems(retrievedData);
    }
  }, [retrievedData]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewTask(e.target.value);
    },
    []
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTask.trim() === "") {
      alert("Por favor ingresa una tarea");
      return;
    }
    if (!taskItems.find((t: any) => t.name === newTask)) {
      setTaskItems([...taskItems, { name: newTask, done: false }]);
      setNewTask("");
    }
  };

  const handleChecked = (task: Task) => {
    setTaskItems(
      taskItems.map(t => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  const handleCleanTasks = useCallback(() => {
    setTaskItems([]);
  }, []);

  return (
    <>
      <Header />
      <section>
        <div className="formContainer">
          <Form
            value={newTask}
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
          />
          <MemoizedButton onClick={handleCleanTasks}>Limpiar tareas</MemoizedButton>
        </div>
        <div>
          <Table tasks={taskItems} onChange={handleChecked} />
        </div>
      </section>
    </>
  );
};
