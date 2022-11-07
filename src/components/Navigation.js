import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar, Button} from "react-bootstrap";

export function Navigation(props){
    const {links} = props;
    return <>
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#home">Marvel Database</Navbar.Brand>
                    <Nav className="d-flex flex-row">
                        {links.map((link,index) => <Nav.Link className="m-2" key={index} href={`#${link}`}>{link}</Nav.Link>)}
                    </Nav>
            </Container>
        </Navbar>
    </>
}

