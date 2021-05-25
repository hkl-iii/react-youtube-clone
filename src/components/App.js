import './App.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Row>
        <Col style={{border:"2px solid red"}}>
        <Form>
  <Form.Row>
    <Col>
      <Form.Control size="lg" type="text" placeholder="Search video here..." />
    </Col>
    <Col>
    <Button variant="primary" size="lg">
          Search
        </Button>    
      </Col>
  </Form.Row>
</Form>
        <Form.Control size="lg" type="text" placeholder="Large text" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={8} style={{border:"2px solid red"}}>Video</Col>
        <Col xs={12} lg={4} style={{border:"2px solid red"}}>Suggestions</Col>
      </Row>
  </Container>
  );
}

export default App;
