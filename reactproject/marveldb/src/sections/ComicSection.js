import * as PropTypes from "prop-types";
import {Container} from "react-bootstrap";
import {Comics} from "../components/Comics";

export function ComicSection(props) {
    const {comics, id} = props;
    return <>
        <Container>
            <div><h3 className="text-center rounded">{id}</h3></div>
            <Comics comics={comics} id={id}></Comics>
        </Container>


    </>
}

ComicSection.propTypes = {
    comics: PropTypes.any,
    id: PropTypes.string
};