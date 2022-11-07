import {ActorCardElement} from "./CardElement";
import {Section} from "./Section";
import {Col} from "react-bootstrap";
import {useState} from "react";
import PropTypes from "prop-types";

export function Actors(props){
    const {actors, id} = props;
    return <Section id={id}>
        {actors?.map((actor, index) => <Actor key={index} actor={actor}></Actor>)}
    </Section>
}

export function Actor(props){
    const {actor} = props;
    const [info, showInfo] = useState(false);
    return <>
        <Col className="col-sm-3 h-auto">
            <ActorCardElement actor={actor}>
            </ActorCardElement></Col>
    </>
}

Actor.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    movies: PropTypes.arrayOf(PropTypes.string),
    characterName: PropTypes.string
}

Actors.propTypes = {
    actors: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.string
}
