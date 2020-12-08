import React from "react";
import PropTypes from "prop-types";
import { Badge, Button, ListGroupItem } from "react-bootstrap";
import TaskModel from "models/Task";

const Task = ({ task, update }) => {
  return (
    <ListGroupItem variant={task.getVariant()}>
      <h2 className="d-inline">{task.title}</h2>
      <Badge variant={task.getVariant()} className="float-right">
        {task.getStatus()}
      </Badge>
      <div className="row">
        <div className="col-10">
          <p className="m-0">Echéance : {task.deadline.toLocaleDateString()}</p>
          <p className="m-0"> Temps restant : {task.getRemaining()} jours</p>
        </div>
        <div className="col-2 text-right">
          {task.completed ? (
            <Button onClick={() => update(false, task)} variant="dark">Annuler</Button>
          ) : (
            <Button onClick={() => update(true, task)} variant="dark">Terminer</Button>
          )}
        </div>
      </div>
    </ListGroupItem>
  );
};

Task.propTypes = {
  task: PropTypes.instanceOf(TaskModel).isRequired,
  update: PropTypes.func.isRequired,
};

export default Task;
