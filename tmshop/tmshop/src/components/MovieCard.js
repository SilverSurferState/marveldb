import {Card} from "react-bootstrap";

export function MovieCard(props){
    const {title, children, id} = props;
    return <>
        <Card id={id} className="m-5">
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div>
                    {children}
                </div>
            </Card.Body>
        </Card>

    </>
}