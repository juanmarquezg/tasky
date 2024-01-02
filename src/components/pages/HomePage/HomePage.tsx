import { FC, useEffect } from "react";
import React, { useState } from "react";

import  "./HomePage.css";
import { Table } from "../../organisms";
import { Button } from "../../atoms";
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTask.trim() === "") {
      alert("Por favor ingresa una tarea");
      return;
    }
    if (!taskItems.find((t: any) => t.name === e) && newTask) {
      setTaskItems([...taskItems, { name: newTask, done: false }]);
      setNewTask("");
    }
  };

  const handleChecked = (task: Task) => {
    setTaskItems(
      taskItems.map(t => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  const handleCleanTasks = () => {
    setTaskItems([]);
  };

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
          <Button onClick={handleCleanTasks}>Limpiar tareas</Button>
        </div>
        <div>
          <Table tasks={taskItems} onChange={handleChecked} />
        </div>
      </section>
    </>
  );
};
