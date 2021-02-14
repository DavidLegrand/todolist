import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import ToDoList from "components/ToDoList";
import { UserProvider } from "context/User";
import { ListProvider } from "context/List";
function App() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="display-4 text-center">To Do List</h1>
          <UserProvider>
            <ListProvider>
              <ToDoList></ToDoList>
            </ListProvider>
          </UserProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
