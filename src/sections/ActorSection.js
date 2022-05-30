import {Actors} from "../components/Actors";
import {Container, Row} from "react-bootstrap";
import {Sorter} from "../components/Sorter";
import {useState} from "react";
import * as PropTypes from "prop-types";
import {MovieSection} from "./MovieSection";

export function ActorSection(props){
    const {actors, id} = props
    const [sort, setSort] = useState("default");
    return <Container>
        <div><h3 className="text-center rounded">{id}</h3></div>
        <Row className="justify-content-center">
            <Sorter onClick={() => setSort("AZ")} name="A-Z"/>
            <Sorter onClick={() => setSort("ZA")} name="Z-A"/>
        </Row>
    <Actors actors={actors} id={id} sorted={sort}></Actors>
    </Container>
}

MovieSection.propTypes = {
    actors : PropTypes.arrayOf(PropTypes.object),
    id : PropTypes.string,
}