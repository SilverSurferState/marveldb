import {Movies} from "../components/Movies";
import {Button} from "react-bootstrap";
import {useState} from "react";


export function MovieSection(props){
    const {movies, id} = props;
    const [sort, setSort] = useState("default");
    return <>
        <div><Button onClick={() => setSort("newOld")}>sorteer nieuw naar oud</Button></div>
        <Movies movies={movies} sorted={sort}  id={id}></Movies>
    </>
}