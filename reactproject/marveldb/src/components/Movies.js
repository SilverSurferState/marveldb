import {CardElement} from "./CardElement";
import {Section} from "./Section";
import {Col} from "react-bootstrap";
import {useState} from "react";
import PropTypes from "prop-types";


function getSortingType(sorted, movies) {
    if (sorted === "AZ") {
       movies.sort((m, am) => m.title.localeCompare(am.title))
    }
    else if (sorted === "ZA") {
        movies.sort((m, am) => -1 * m.title.localeCompare(am.title))
    }
    else if (sorted === "NO"){
       movies.sort((m, am) => m.releaseDate < (am.releaseDate))
    }
    else if (sorted === "ON"){
        movies.sort((m, am) => m.releaseDate > (am.releaseDate))
    }
    else if(sorted === "NS"){
       return movies.filter(m => m.score !== undefined).map(m => m)
    }
}

export function Movies(props){
    const {movies, id, sorted}  = props;
    const filteredMovies = getSortingType(sorted, movies);
    const moviesToMap = filteredMovies === undefined ? movies : [...filteredMovies]
    return <Section id={id}>
        {moviesToMap.map(movie => <Movie key={movie.id} movie={movie}></Movie>)}
    </Section>
}

export function Movie(props){
    const {releaseDate, score, title} = props.movie;
    const [numValue, setNumValue] = useState(score);
    return <>
        <Col className="col-sm-3 h-auto">
            <CardElement title={title} setNumValue={setNumValue} score={numValue}>
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
