import {Container, Row} from "react-bootstrap";
import PropTypes from "prop-types";

export function Section(props){
    const {title, children, id} = props
    return <>
    <Container className="bg-light rounded-3 mt-5 pt-3 text-center" id={id}>
        <h3 className="text-center">{title}</h3>
            <Row className="justify-content-center">
                {children}
            </Row>
    </Container>
    </>
}

Section.propTypes = {
    children: PropTypes.node
}