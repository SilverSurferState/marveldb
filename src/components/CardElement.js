import {Button, Card, OverlayTrigger, Popover} from "react-bootstrap";
import {useState} from "react";
import PropTypes from "prop-types";
import {useStorage} from "../hooks/useStorage";
import {MovieButtonGroup, ActorButtonGroup, ComicButtonGroup} from './ButtonGroup';


export function MovieCardElement(props){
    const {movie} = props;
    const [clicked, setClicked] = useState(false);
    const imgTitle = movie.title.replace(/\s+/g, '').replace(':','_').toLowerCase();
    const img = useStorage(`${imgTitle}.jpg`);

    return <>
        <Card className="m-3">
            <Card.Body>
            <Card.Img src={img} onClick={(e) => {
                e.stopPropagation();
                setClicked(!clicked)}}/>
                {clicked && <footer>
                    <h3>{movie.title && movie.title}</h3>
                    <ul className="list-inline">
                    <li>Release date:{movie.releaseDate && movie.releaseDate}</li>
                    <li>Score:{movie.score && movie.score}</li>
                    <li>Seen:{movie.seen && movie.seen? "yes" : "no"}</li>
                    </ul>
                    <MovieButtonGroup object={movie} />
                </footer>}
            </Card.Body>
        </Card>
    </>
}

export function ActorCardElement(props){
    const {actor} = props;
    const [clicked, setClicked] = useState(false);
    const imgTitle = actor.name.replace(/\s+/g, '').replace(':','_').toLowerCase();
    const img = useStorage(`${imgTitle}.jpg`);

    return <>
        <Card className="m-3">
            <Card.Body>
            <Card.Img src={img} onClick={(e) => {
                e.stopPropagation();
                setClicked(!clicked)}}/>
                {clicked && <footer>
                    <h3>{actor.name}</h3>
                    <ul className="list-inline">
                        <li>Alias:{actor.alias}</li>
                        <li>Birthday:{actor.birthday}</li>
                        </ul>
                    <ActorButtonGroup object={actor} />
                </footer>
                }
            </Card.Body>
        </Card>
    </>
}

export function ComicCardElement(props){
    const {comic} = props;
    const [clicked, setClicked] = useState(false);
    const imgTitle = comic.title.replace(/\s+/g, '').replace(':','_').toLowerCase();
    const img = useStorage(`${imgTitle}.jpg`);

    const popover = (
            <Popover id="popover-basic">
                <Popover.Header as="h3">{comic.title}</Popover.Header>
                <Popover.Body>
                    {comic.published && <div><strong>Published: </strong> {comic.published}</div>}
                    {comic.writer && <div><strong>Writer: </strong> {comic.writer}</div>}
                    {comic.description && <div><strong>Description: </strong> {comic.description}</div>}
                </Popover.Body>
            </Popover>
        );
        const Overlay = () => (
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                <Button className="m-3" variant="success">More info</Button>
            </OverlayTrigger>
        );


    return <>
        <Card className="m-3">
            <Card.Body>
            <Card.Img src={img}onClick={(e) => {
                 e.stopPropagation();
                 setClicked(!clicked)}}/>
               {clicked && <footer>
                    <Overlay>

                    </Overlay>
                </footer>}
            </Card.Body>
        </Card>
    </>
}



