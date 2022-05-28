import {DataElement} from "./dataElement";
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
    const {movie} = props;
    const [numValue, setNumValue] = useState(movie.score);
    return <>
        <Col className="col-sm-3 h-auto">
            <DataElement title={movie.title} setNumValue={setNumValue} score={numValue}>
            <p><strong>Releasedatum: </strong> {movie.releaseDate}</p>
        </DataElement></Col>
    </>
}

Movies.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    id: PropTypes.string,
    sorted: PropTypes.string
}

Movie.propTypes = {
    movie: PropTypes.object
}
