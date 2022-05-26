import {MyCard} from "./MyCard";
import {Section} from "./Section";
import {Col} from "react-bootstrap";

export function Actors(props){
    const {actors, id} = props;
    return <Section id={id} title={id}>
        {actors.map((actor, index) => <Actor key={index} actor={actor}></Actor>)}
    </Section>
}

export function Actor(props){
    const {actor} = props;
    return <>
        <Col className="col-sm-3 h-auto">
            <MyCard title={`${actor.firstName} ${actor.lastName}`}>
            </MyCard></Col>
    </>
}