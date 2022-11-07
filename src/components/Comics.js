import {Section} from "./Section";
import {Button, Col, OverlayTrigger, Popover} from "react-bootstrap";
import {ComicCardElement} from "./CardElement";

function Comic(props){
    const {comic} = props;
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
            <Button variant="success">Meer info</Button>
        </OverlayTrigger>
    );
    return <>
        <Col className="col-sm-3 h-auto">
            <ComicCardElement comic={comic}>
                <Overlay>

                </Overlay>
            </ComicCardElement></Col>
    </>
}

export function Comics(props){
    const {comics, id} = props;
    return <Section id={id}>
        {comics?.map((comic,index) => <Comic key={index} comic={comic}></Comic>)}
    </Section>
}