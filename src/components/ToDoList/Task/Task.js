import React from "react";
import PropTypes from "prop-types";
import { Badge, Button, ListGroupItem } from "react-bootstrap";
import TaskModel from "models/Task";

const Task = () => {
  const task = new TaskModel({
    title: "Première tâche",
  });
  console.log(task);
  return (
    <ListGroupItem variant={task.getVariant()}>
      <h2 className="d-inline">{task.title}</h2>
      <Badge variant={task.getVariant()} className="float-right">
        {task.getStatus()}
      </Badge>

      <div>Echéance : {task.deadline.toLocaleDateString()}</div>
      <div>Temps restant : {task.getRemaining()} jours</div>
      <div>
        {task.completed ? (
          <Button onClick={() => console.log("annuler", task)}>Annuler</Button>
        ) : (
          <Button onClick={() => console.log("terminer", task)}>Terminer</Button>
        )}
      </div>
    </ListGroupItem>
  );
};

Task.propTypes = {
  //
};

export default Task;
