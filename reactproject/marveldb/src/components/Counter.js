import {Button} from "react-bootstrap";
import PropTypes from "prop-types";

export function Counter(props){
    const {score, setNumValue, clicked} = props
    const maxValue = 10;
    return <>
        {score >=0 && <p><strong>Score: </strong>{score}</p>}
        {(clicked && score >= 0 && <div>
        <Button className="btn btn-primary m-1" onClick={(e) => {
            e.stopPropagation()
            setNumValue(score < maxValue ? score+1 : score)
        }}>+</Button>
        <Button className="btn btn-primary m-1" onClick={(e) => {
            e.stopPropagation()
            setNumValue(score > 0 ? score-1 : 0)
        }}>-</Button>
        </div>)}
    </>
}

Counter.propTypes = {
    score: PropTypes.number,
    setNumValue: PropTypes.func,
    clicked: PropTypes.bool,
}