import {Section} from "./Section";
import {Button, Col, OverlayTrigger, Popover} from "react-bootstrap";
import {CardElement} from "./CardElement";

function Comic(props){
    const {published, writer, title, description} = props.comic
    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">{title}</Popover.Header>
            <Popover.Body>
                {published && <div><strong>Gepubliceerd: </strong> {published}</div>}
                {writer && <div><strong>Schrijver(s): </strong> {writer}</div>}
                {description && <div><strong>Beschrijving: </strong> {description}</div>}
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
            <CardElement title={`${title}`}>
                <Overlay>

                </Overlay>
            </CardElement></Col>
    </>
}






export function Comics(props){
    const {comics, id} = props
    return <Section id={id}>
        {comics.map((comic,index) => <Comic key={index} comic={comic}></Comic>)}
    </Section>
}