import React from 'react';
import './App.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ApiKeys.js';
import axios from 'axios';

//  api KEY AIzaSyBMZV1ctnvz_l4iSqmXx5ldKDb6FR0h7t0
axios.get('https://www.googleapis.com/youtube/v3/search?q={superheroes}&key={KEY}')

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
