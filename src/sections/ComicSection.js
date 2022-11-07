import {Comics} from "../components/Comics";
import {Container, Row, Button} from "react-bootstrap";
import {useState} from "react";
import {ComicModal} from "../components/Modal"
import * as PropTypes from "prop-types";
import {useComicContext} from '../context/ComicContext'


export function ComicSection(props){
    const {id} = props;
    const [show, setShow] = useState(false);
    const {comics} = useComicContext();
    console.log(comics)
    return <Container>
        <div><h3 className="text-center rounded">{id}</h3></div>
        <Row className="justify-content-center">
            <Button className="w-25 btn btn-primary" onClick={() => setShow(true)}>Add Comic</Button>
            <ComicModal show={show} setShow={() => setShow(false)} title={"Add Comic"}/>
        </Row>
        <Comics comics={comics} id={id}></Comics>
    </Container>

}

ComicSection.propTypes = {
    comics: PropTypes.any,
    id: PropTypes.string
};