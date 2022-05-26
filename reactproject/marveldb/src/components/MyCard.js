import {Card} from "react-bootstrap";
import {Counter} from "./Counter";
import {useState} from "react";

export function MyCard(props){
    const {title, children, setNumValue, score} = props;
    const [clicked, setClicked] = useState(false);
    const imgTitle = title.replace(/\s+/g, '').toLowerCase();
    return <>
        <Card className="m-3 " onClick={() => setClicked(!clicked)}>
            <Card.Img variant="top" src={`images/${imgTitle}.jpg`}></Card.Img>
            <Card.Body>
                <Card.Title>{title && title}</Card.Title>
                <div>
                    {children}
                </div>
                <footer>
                    <Counter clicked={clicked} score={score} setNumValue={setNumValue}></Counter>
                </footer>
            </Card.Body>
        </Card>

    </>
}
