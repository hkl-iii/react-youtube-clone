import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Row>
        <Col style={{border:"2px solid red"}}>Search</Col>
      </Row>
      <Row>
        <Col xs={12} lg={8} style={{border:"2px solid red"}}>Video</Col>
        <Col xs={12} lg={4} style={{border:"2px solid red"}}>Suggestions</Col>
      </Row>
  </Container>
  );
}

export default App;
