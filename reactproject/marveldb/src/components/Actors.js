import {DataElement} from "./dataElement";
import {Section} from "./Section";
import {Col} from "react-bootstrap";
import {useState} from "react";
import PropTypes from "prop-types";

export function Actors(props){
    const {actors, id, sorted} = props;
    getSortingType(sorted, actors);
    return <Section id={id}>
        {actors.map((actor, index) => <Actor key={index} actor={actor}></Actor>)}
    </Section>
}

export function Actor(props){
    const {firstName, lastName, movies, characterName} = props.actor;
    const [info, showInfo] = useState(false);
    return <>
        <Col className="col-sm-3 h-auto">
            <DataElement title={`${firstName} ${lastName}`} info={info} showInfo={showInfo} >
                <div>
                    <strong>personage: </strong>
                    <div>{characterName}</div>
                </div>
                <div>
                    Speelt mee in:
                    {movies.map((m, index) => <li key={index}>{m}</li>)}
                </div>

            </DataElement></Col>
    </>
}

function getSortingType(sorted, actors) {
    if (sorted === "AZ") {
        actors.sort((m, am) => m.lastName.localeCompare(am.lastName))
    }
    else if (sorted === "ZA") {
        actors.sort((m, am) => -1 * m.lastName.localeCompare(am.lastName))
    }
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
