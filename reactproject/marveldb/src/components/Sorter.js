import {Button} from "react-bootstrap";
import PropTypes from "prop-types";

export function Sorter(props) {
    return <Button className="col-2 m-2" onClick={props.onClick}>{props.name}</Button>;
}

Sorter.propTypes = {
    onClick: PropTypes.func,
    name: PropTypes.string
}