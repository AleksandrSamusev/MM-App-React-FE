import {MonthBlock} from "./MonthBlock/MonthBlock.jsx";

export const MonthRow = (props) => {
    return (
        <>
            <MonthBlock period = {props.period} onMonthClick = {props.onMonthClick} month1='01' month2='02' month3='03'/>
            <MonthBlock period = {props.period} onMonthClick = {props.onMonthClick} month1='04' month2='05' month3='06'/>
            <MonthBlock period = {props.period} onMonthClick = {props.onMonthClick} month1='07' month2='08' month3='09'/>
            <MonthBlock period = {props.period} onMonthClick = {props.onMonthClick} month1='10' month2='11' month3='12'/>
        </>
    )
}