import {MyCard} from "./MyCard";
import {Section} from "./Section";
import {Col} from "react-bootstrap";
import {useState} from "react";

export function Movies(props){
    const {movies, id, sorted} = props;
    console.log(sorted)
    sorted === "newOld" ? movies.sort((a,b) => a.releaseDate < b.releaseDate) : movies.sort((a,b) => a.score > b.score)
    return <Section id={id} title={id}>
        {movies.map(movie => <Movie key={movie.id} movie={movie}></Movie>)}
    </Section>
}

export function Movie(props){
    const {movie} = props;
    const [numValue, setNumValue] = useState(movie.score);
    return <>
        <Col className="col-sm-3 h-auto">
            <MyCard title={movie.title} setNumValue={setNumValue} score={numValue}>
            <p><strong>Releasedatum: </strong> {movie.releaseDate}</p>
        </MyCard></Col>
    </>
}