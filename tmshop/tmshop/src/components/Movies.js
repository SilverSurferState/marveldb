import {Page} from "../pages/Page";
import {MovieCard} from "./MovieCard";

export function Movies(props){
    const {movies} = props;
    return <Page>
        {movies.map(movie => <Movie key={movie.id} movie={movie}></Movie>)}
    </Page>
}

export function Movie(props){
    const {movie} = props;
    return <>
    <MovieCard id={movie.id} title={movie.title}>
        <p>{movie.releaseDate}</p>
        <p>{movie.score}</p>
    </MovieCard>
    </>
}