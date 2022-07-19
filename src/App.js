import './App.css';
import About from "./components/About";
import Navigation from "./components/Navigation";
import Vita from "./components/Vita";
import { Col, Container, Row } from 'react-bootstrap';
import Interests from './components/Interests';
import Research from './components/Research';
import Footer from './components/Footer';
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
            <Research />
            <Vita />
            <Interests />
          </Col>
        </Row>
      </Container>
      <Footer />
    </main>
  );
}

export default App;
