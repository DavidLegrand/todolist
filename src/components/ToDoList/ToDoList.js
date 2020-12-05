import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Task from './Task';

const ToDoList = () => {
  return <ListGroup>
    <Task></Task>
    <Task></Task>
    <Task></Task>
  </ListGroup>;
};

export default ToDoList;
