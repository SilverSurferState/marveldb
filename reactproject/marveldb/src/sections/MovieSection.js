import {Movies} from "../components/Movies";
import {Container, Row} from "react-bootstrap";
import {useState} from "react";
import * as PropTypes from "prop-types";
import {Sorter} from "../components/Sorter";

Sorter.propTypes = {onClick: PropTypes.func};
MovieSection.propTypes = {
    movies : PropTypes.arrayOf(PropTypes.object),
    id : PropTypes.string,
}

export function MovieSection(props){
    const {movies, id} = props;
    const [sort, setSort] = useState("default");
    return <Container>
        <div><h3 className="text-center rounded">{id}</h3></div>
        <Row className="justify-content-center">
            <Sorter onClick={() => setSort("NO")} name="nieuw-oud"/>
            <Sorter onClick={() => setSort("ON")} name="oud-nieuw"/>
            <Sorter onClick={() => setSort("AZ")} name="A-Z"/>
            <Sorter onClick={() => setSort("ZA")} name="Z-A"/>
            <Sorter onClick={() => setSort("NS")} name="Met score"></Sorter>
        </Row>
        <Movies movies={movies} sorted={sort} id={id}></Movies>
    </Container>
}