import {Container, Row} from "react-bootstrap";

export function Page(props){
    const {children} = props;
    return <>
        <Container>
            <Row>
                {children}
            </Row>
        </Container>
    </>
}