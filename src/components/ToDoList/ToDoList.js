import React, { useState, useEffect, useContext } from "react";
import { ListGroup, ListGroupItem, Button } from "react-bootstrap";
import Task from "./Task";
import NewTaskForm from "./NewTaskForm";
import api from "api";
import { arrToObj } from "utils/arrays";
import { UserContext } from "context/User";
import { ListContext } from "context/List";
import TaskModel from "models/Task";
import { priorities } from "models/Task";

const ToDoList = () => {
  const [user, setUser] = useContext(UserContext);
  // const initList = [
  //   new TaskModel({
  //     id: 1,
  //     title: "Finaliser les maquettes",
  //     completed: true,
  //     priority: priorities.low,
  //   }),
  //   new TaskModel({
  //     id: 2,
  //     title: "Valider les specs",
  //     priority: priorities.high,
  //   }),
  //   new TaskModel({
  //     id: 3,
  //     title: "Intégrer le formulaire",
  //     priority: priorities.medium,
  //   }),
  //   new TaskModel({
  //     id: 4,
  //     title: "Préparer la démo",
  //     priority: priorities.low,
  //   }),
  // ];
  const [list, setList] = useContext(ListContext);

  // useEffect(() => {
  //   const sendData = async () => {
  //     const options = {
  //       method: "PUT",
  //       mode: "cors",
  //       body: JSON.stringify(arrToObj(list)),
  //       headers: { "Content-Type": "application/json" },
  //     };
  //     try {
  //       const res = await fetch(`${api}/tasks.json`, options);
  //       if (!res.ok) throw Error(res.statusText);
  //       else console.log("données envoyées", list, res);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };
  //   if (list !== null) sendData();
  // }, [list]);

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
        createdBy: user.id,
        assignedTo: user.id,
      },
    ]);
  };
  return (
    <>
      User ID :{" "}
      <input
        type="number"
        value={user.id}
        onChange={(e) => setUser({ id: +e.target.value })}
      />
      <ListGroup>
        {list !== null
          ? list
              .filter((t) => t.assignedTo === user.id)
              .map(
                (t) =>
                  t !== null && (
                    <Task
                      task={new TaskModel(t)}
                      update={updateCompleted}
                      key={t.id}
                    />
                  )
              )
          : "loading"}
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
