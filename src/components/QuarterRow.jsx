import {QuarterBlock} from "./QuarterBlock/QuarterBlock.jsx";

export const QuarterRow = (props) => {
    return (
        <>
            <QuarterBlock period = {props.period} onQuarterClick={props.onQuarterClick} quarter='q1'/>
            <QuarterBlock period = {props.period} onQuarterClick={props.onQuarterClick} quarter='q2'/>
            <QuarterBlock period = {props.period} onQuarterClick={props.onQuarterClick} quarter='q3'/>
            <QuarterBlock period = {props.period} onQuarterClick={props.onQuarterClick} quarter='q4'/>
        </>

    )
}