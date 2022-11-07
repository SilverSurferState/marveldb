import {MovieCardElement} from "./CardElement";
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
    const {movie} = props;
    return <>
        <Col className="col-sm-3 h-auto">
            <MovieCardElement movie={movie}/>
        </Col>
    </>
}

Movies.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.string,
}

Movie.propTypes = {
    releaseDate: PropTypes.string,
    score: PropTypes.number,
    title: PropTypes.string
}
