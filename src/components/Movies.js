import {CardElement} from "./CardElement";
import {Section} from "./Section";
import {Col} from "react-bootstrap";
import {useState} from "react";
import PropTypes from "prop-types";



export function Movies(props){
    const {movies, id}  = props;
    return <Section id={id}>
        {movies?.map(movie => <Movie key={movie.id} movie={movie}></Movie>)}
    </Section>
}

export function Movie(props){
    const {releaseDate, score, title, Title} = props.movie;
    const [numValue, setNumValue] = useState(score);
    return <>
        <Col className="col-sm-3 h-auto">
            <CardElement title={title || Title} setNumValue={setNumValue} score={numValue}>
            <div><strong>Releasedatum: </strong> {releaseDate}</div>
        </CardElement></Col>
    </>
}

Movies.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    id: PropTypes.string,
    sorted: PropTypes.string
}

Movie.propTypes = {
    releaseDate: PropTypes.string,
    score: PropTypes.number,
    title: PropTypes.string
}
