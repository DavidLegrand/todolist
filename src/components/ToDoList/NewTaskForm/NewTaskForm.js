import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  FormCheck,
  Button,
} from "react-bootstrap";
import TaskModel, { priorities } from "models/Task";

const NewTaskForm = ({ add }) => {
  const initTask = new TaskModel();
  const [task, setTask] = useState(initTask);
  const [isValid, setIsValid] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      add(task);
      setTask(initTask);
      setIsValid(null)
    }
  };
  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    if(name==="title"){
      setIsValid(value.trim()!=="")
    }
    setTask((task) => new TaskModel({ ...task, [name]: value }));
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <h1 className="display-4 text-center">Créer une tâche</h1>
      </FormGroup>
      <FormGroup>
        <FormLabel>Titre</FormLabel>
        <FormControl
          name="title"
          value={task.title}
          onChange={handleChange}
          isValid={isValid}
          isInvalid={isValid === false}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel>Description</FormLabel>
        <FormControl
          as="textarea"
          name="description"
          value={task.description}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <FormLabel>Statut</FormLabel>
        <FormCheck
          name="completed"
          label={task.getCompleted()}
          checked={task.completed}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
           <FormLabel>Priorité</FormLabel>
        <FormControl
          as="select"
          name="priority"
          value={task.priority}
          onChange={handleChange}
        >
          {Object.values(priorities).map((val, i) => (
            <option key={i} value={val}>
              {val}
            </option>
          ))}
        </FormControl>
      </FormGroup>
      <FormGroup>
        <Button variant="success" type="submit">
          Enregistrer
        </Button>
      </FormGroup>
    </Form>
  );
};

NewTaskForm.propTypes = {
  add: PropTypes.func.isRequired,
};

export default NewTaskForm;
