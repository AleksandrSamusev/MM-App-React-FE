import './QuarterBlock.css'
import {getCurrentQuarterAsNumber} from "../../services/CommonFunctions.jsx";

export const QuarterBlock = (props) => {

    function isQuarterInFuture(quarter) {
        let qAsNum;
        if (quarter === 'q1') {
            qAsNum = 1;
        } else if (quarter === 'q2') {
            qAsNum = 2;
        } else if (quarter === 'q3') {
            qAsNum = 3;
        } else if (quarter === 'q4') {
            qAsNum = 4;
        }
        const currentQuarterAsNumber = getCurrentQuarterAsNumber();
        return qAsNum > currentQuarterAsNumber;

    }

    return (
        <div
            className="col-3 d-flex align-items-center justify-content-center"
            style={{paddingLeft: '2px', paddingRight: '2px'}}>
            <span
                id={props.quarter}
                className={"manage-quarter " + (isQuarterInFuture(props.quarter) && 'no-events')}
                onClick={props.onQuarterClick}
                style={{
                    backgroundColor: props.period === props.quarter && '#FFF171',
                    color: props.period === props.quarter ? 'black' : isQuarterInFuture(props.quarter) && 'rgba(255,255,255,0.3)'
                }}
            >
                {props.quarter.toUpperCase()}
            </span>
        </div>
    )
}