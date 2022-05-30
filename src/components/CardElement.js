import {Button, Card} from "react-bootstrap";
import {Counter} from "./Counter";
import {useState} from "react";
import PropTypes from "prop-types";

export function CardElement(props){
    const {title, children, setNumValue, score, info, showInfo} = props;
    const [clicked, setClicked] = useState(false);
    const imgTitle = title.replace(/\s+/g, '').toLowerCase();
    return <>
        <Card className="m-3" onClick={() => setClicked(!clicked)}>
            <Card.Img variant="top" src={`images/${imgTitle}.jpg`}></Card.Img>
            <Card.Body>
                <Card.Title>{title && title}</Card.Title>
                {info !== undefined && <Button className="btn btn-primary" onClick={() => showInfo(!info)}>Meer info</Button>}
                {(info === undefined || info) && <div>
                    {children}
                </div>}
                <footer>
                    <Counter clicked={clicked} score={score} setNumValue={setNumValue}></Counter>
                </footer>
            </Card.Body>
        </Card>
    </>
}

CardElement.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    setNumValue: PropTypes.func,
    score: PropTypes.number,
    info: PropTypes.bool,
    showInfo: PropTypes.func
}
