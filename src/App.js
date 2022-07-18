import './App.css';
import About from "./components/About";
import Navigation from "./components/Navigation";
import Vita from "./components/Vita";
import { Col, Container, Row } from 'react-bootstrap';
import Interests from './components/Interests';
import Researches from './components/Researches';
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
            <Researches />
            <Vita />
            <Interests />
          </Col>
        </Row>
      </Container>

    </main>
  );
}

export default App;
