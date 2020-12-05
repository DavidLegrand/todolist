import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import ToDoList from "components/ToDoList";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="display-4 text-center">To Do List</h1>
          <ToDoList></ToDoList>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
