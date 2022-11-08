import {Movies} from "../components/Movies";
import {Container, Row, Button} from "react-bootstrap";
import {useState} from "react";
import {MovieModal} from "../components/Modal"
import * as PropTypes from "prop-types";
import {useMovieContext} from '../context/MovieContext'

MovieSection.propTypes = {
    movies : PropTypes.arrayOf(PropTypes.object),
    id : PropTypes.string,
}




export function MovieSection(props){
    const {id} = props;
    const [show, setShow] = useState(false);
    const {movies} = useMovieContext();
    const [movieList, setMovieList] = useState(movies);
    const sortByTitle = () => {
        const sorted = [
          ...movies.sort((a, b) => {
            return a.title.localeCompare(b.title);
          })
        ];
        setMovieList(sorted);
      };

      const sortByTitleReverse = () => {
              const sorted = [
                ...movies.sort((a, b) => {
                  return a.title.localeCompare(b.title);
                })
              ];
              sorted.reverse();
              setMovieList(sorted);
            };

    const sortByReleaseDate = () => {
            const sorted = [
              ...movies.sort((a, b) => {
                return a.releaseDate>b.releaseDate;
              })
            ];
            setMovieList(sorted);
          };


    return <Container>
        <div><h3 className="text-center rounded">{id}</h3></div>
        <Row className="justify-content-center">
            <Button className="col-2 btn btn-primary m-2" onClick={() => sortByReleaseDate()}>Sort by releasedate</Button>
            <Button className="col-2 btn btn-primary m-2" onClick={() => sortByTitle()}>Sort A-Z</Button>
            <Button className="col-2 btn btn-primary m-2" onClick={() => sortByTitleReverse()}>Sort Z-A</Button>
            <Button className="col-2 btn btn-primary m-2" onClick={() => setShow(true)}>Add Movie</Button>
            <MovieModal show={show} setShow={() => setShow(false)} title={"Add Movie"}/>
        </Row>
        <Movies movies={movieList?.length > 0 ? movieList : movies} id={id}></Movies>
    </Container>

}