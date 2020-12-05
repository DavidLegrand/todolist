import React from "react";
import PropTypes from "prop-types";
import { Badge, ListGroupItem } from "react-bootstrap";
import TaskModel from "models/Task";

const Task = () => {
  const task = new TaskModel({
    title: "Première tâche"
  });
  console.log(task)
  return (
    <ListGroupItem variant={task.getVariant()}>
      <h2 className="d-inline">{task.title}</h2>
      <Badge variant={task.getVariant()} className="float-right">
        {task.getStatus()}
      </Badge>

      <div>Echéance : {task.deadline.toLocaleDateString()}</div>
      <div>Temps restant : {task.getRemaining()} jours</div>
    </ListGroupItem>
  );
};

Task.propTypes = {
  //
};

export default Task;
