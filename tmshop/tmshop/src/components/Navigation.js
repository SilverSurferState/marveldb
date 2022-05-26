import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

export function Navigation(props){
    const {links} = props;
    return <>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Nav className="d-flex flex-row">
                        {links.map((link,index) => <Nav.Link className="m-2" key={index} href={`#${index}`}>{link}</Nav.Link>)}
                    </Nav>
            </Container>
        </Navbar>
    </>
}