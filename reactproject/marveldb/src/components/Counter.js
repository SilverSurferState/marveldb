
import {Button} from "react-bootstrap";

export function Counter(props){
    const {score, setNumValue, clicked} = props
    const maxValue = 10;
    return <>
        {score && <p><strong>Score: </strong>{score}</p>}
        {(clicked && score && <div>
        <Button className="btn btn-primary m-1" onClick={(e) => {
            e.stopPropagation()
            setNumValue(score < maxValue ? score+1 : score)
        }}>+</Button>
        <Button className="btn btn-primary m-1" onClick={(e) => {
            e.stopPropagation()
            setNumValue(score > 0 ? score-1 : score)
        }}>-</Button>
        </div>)}
    </>
}