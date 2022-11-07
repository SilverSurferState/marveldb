import {Button} from "react-bootstrap";
import {useState} from 'react';
import {EditComicModal, EditMovieModal, EditActorModal} from './EditModal';
import {useMovieContext} from '../context/MovieContext';
import {useActorContext} from '../context/ActorContext';
import {useComicContext} from '../context/ComicContext';


export function MovieButtonGroup(props){
    const {object} = props;
    const [show, setShow] = useState(false);
    const {deleteMovie} = useMovieContext();
    return <>
        <Button className="btn btn-primary m-1" onClick={() => setShow(true)}>Edit Movie</Button>
        <EditMovieModal show={show} setShow={() => setShow(false)} movie={object} title={"Edit Movie"}/>
        <Button className="btn btn-secondary m-1" onClick={() => deleteMovie(object)}>Delete Movie</Button>
    </>

}

export function ActorButtonGroup(props){
    const {object} = props;
    const [show, setShow] = useState(false);
    const {deleteActor, editActor} = useActorContext();
    return <>
        <Button className="btn btn-primary m-1" onClick={() => setShow(true)}>Edit Actor</Button>
         <EditActorModal show={show} setShow={() => setShow(false)} actor={object} title={"Edit Actor"}/>
        <Button className="btn btn-secondary m-1" onClick={() => deleteActor(object)}>Delete Actor</Button>
    </>

}

export function ComicButtonGroup(props){
    const {object} = props;
    const [show, setShow] = useState(false);
    const {deleteComic, editComic} = useComicContext();
    return <>
        <Button className="btn btn-primary m-1" onClick={() => editComic(object)}>Edit Comic</Button>
         <EditComicModal show={show} setShow={() => setShow(false)} comic={object} title={"Edit Comic"}/>
        <Button className="btn btn-secondary m-1" onClick={() => deleteComic(object)}>Delete Comic</Button>
    </>

}