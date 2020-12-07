import React from "react";
import { ListGroup } from "react-bootstrap";
import Task from "./Task";
import TaskModel, { priorities } from "models/Task";
const ToDoList = () => {
  const list = [
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
  const updateCompleted = (completed, task) => {
    console.log(completed, task);
  };
  return (
    <ListGroup>
      {list.map((t) => (
        <Task task={new TaskModel(t)} update={updateCompleted} key={t.id} />
      ))}
    </ListGroup>
  );
};

export default ToDoList;
