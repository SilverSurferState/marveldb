import {Movies} from "../components/Movies";
import {Container, Row, Button} from "react-bootstrap";
import {useState} from "react";
import {ModalComponent} from "../components/Modal"
import * as PropTypes from "prop-types";
// import {collection} from "firebase/firestore";
// import {projectFirestore} from "../firebase/config";
// import {useCollectionData} from "react-firebase-hooks/firestore";
import useFirestore from '../hooks/useFirestore';


MovieSection.propTypes = {
    movies : PropTypes.arrayOf(PropTypes.object),
    id : PropTypes.string,
}

export function MovieSection(props){
    const {id} = props;
    const [show, setShow] = useState(false);
    const {values} = useFirestore("Movies");
    console.log(values)
    return <Container>
        <div><h3 className="text-center rounded">{id}</h3></div>
        <Row className="justify-content-center">
            <Button className="w-25 btn btn-primary" onClick={() => setShow(true)}>Voeg film toe</Button>
            <ModalComponent show={show} setShow={() => setShow(false)} title={"Voeg film toe"}></ModalComponent>
        </Row>
        <Movies movies={values} id={id}></Movies>
    </Container>

}