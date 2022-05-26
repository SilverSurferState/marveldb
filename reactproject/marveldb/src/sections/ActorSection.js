import {Actors} from "../components/Actors";

export function ActorSection(props){
    const {actors, id} = props
    return <>
    <Actors actors={actors} id={id}></Actors>

    </>
}