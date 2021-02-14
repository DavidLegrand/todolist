import React, { useState } from "react";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import Task from "./Task";
import NewTaskForm from "./NewTaskForm";

import TaskModel, { priorities } from "models/Task";
const ToDoList = () => {
  const initList = [
    new TaskModel({
      id: 1,
      title: "Finaliser les maquettes",
      completed: true,
      priority: priorities.low,
    }),
    new TaskModel({
      id: 2,
      title: "Valider les specs",
      priority: priorities.high,
    }),
    new TaskModel({
      id: 3,
      title: "Intégrer le formulaire",
      priority: priorities.medium,
    }),
    new TaskModel({
      id: 4,
      title: "Préparer la démo",
      priority: priorities.low,
    }),
  ];
  const [list, setList] = useState(initList);
  const updateCompleted = (completed, task = null) => {
    setList((list) =>
      list.map((t) =>
        !task || task.id === t.id ? { ...t, completed: completed } : t
      )
    );
  };
  const addTask = (task) => {
    setList((list) => [
      ...list,
      {
        ...task,
        id:
          list.reduce((prev, curr) => (curr.id > prev.id ? curr : prev)).id + 1,
      },
    ]);
  };
  return (
    <>
      <ListGroup>
        {list.map((t) => (
          <Task task={new TaskModel(t)} update={updateCompleted} key={t.id} />
        ))}
        <ListGroupItem className="d-flex justify-content-center">
          <Button
            onClick={() => updateCompleted(false)}
            variant="dark"
            className="mr-5"
          >
            Annuler tout
          </Button>
          <Button
            onClick={() => updateCompleted(true)}
            variant="dark"
            className="ml-5"
          >
            Terminer tout
          </Button>
        </ListGroupItem>
      </ListGroup>
      <NewTaskForm add={addTask} />
    </>
  );
};

export default ToDoList;
