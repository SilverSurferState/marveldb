import {Actors} from "../components/Actors";
import {Container, Row, Button} from "react-bootstrap";
import {useState} from "react";
import {ActorModal} from "../components/Modal"
import * as PropTypes from "prop-types";
import {useActorContext} from '../context/ActorContext'


export function ActorSection(props){
    const {id} = props;
    const [show, setShow] = useState(false);
    const {actors} = useActorContext();
    return <Container>
        <div><h3 className="text-center rounded">{id}</h3></div>
        <Row className="justify-content-center">
            <Button className="w-25 btn btn-primary" onClick={() => setShow(true)}>Add Actor</Button>
            <ActorModal show={show} setShow={() => setShow(false)} title={"Add Actor"}/>
        </Row>
        <Actors actors={actors} id={id}></Actors>
    </Container>

}

ActorSection.propTypes = {
    actors: PropTypes.any,
    id: PropTypes.string
};