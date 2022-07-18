import './App.css';
import About from "./components/About";
import Navigation from "./components/Navigation";
import Vita from "./components/Vita";
import { Link, Switch, Route } from 'react-router';
import Publications from './components/Publications';
import { Col, Container, Row } from 'react-bootstrap';
import Interests from './components/Interests';
function App() {
  return (
    <main>
      <Navigation />
      <Container>
        <Row >
          <Col xs={3}>
            <About />
          </Col>
          <Col xs={8}>
            <Vita />
            <Publications />
            <Interests />
          </Col>
        </Row>
      </Container>

    </main>
  );
}

export default App;
