import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" sticky="top" >
            <Container>
                <Navbar.Brand href="#about">Adrien Wicht</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#research">Research</Nav.Link>
                        <Nav.Link href="#cv">Curriculum</Nav.Link>
                        <Nav.Link href="#interests">Interests</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default Navigation;