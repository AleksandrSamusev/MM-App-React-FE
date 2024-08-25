import {ArrowRed} from "../SVGs/ArrowRed.jsx";
import {ArrowGreen} from "../SVGs/ArrowGreen.jsx";
import './Rows.css'

export const FifthRow = (props) => {

    return (
        <>
            <div
                className={"col-8 d-flex align-items-center justify-content-start " + (props.sum < 0 ? 'red-background' : 'green-background')}>
                <span className="row-title">Diff <span className="px-3">{props.sum < 0 ? <ArrowRed/> :
                    <ArrowGreen/>}</span> </span>
            </div>
            <div
                className={"col-2 d-inline-flex align-items-center justify-content-end " + (props.sum < 0 ? 'red-background' : 'green-background')}>
                                <span className="last-row-sell"
                                      style={{color: props.sum < 0 ? 'rgb(255,0,0)' : 'rgb(110,255,60)'}}>{props.sum}</span>
            </div>
            <div
                className={"col-2 d-inline-flex align-items-center justify-content-center " + (props.sum < 0 ? 'red-background' : 'green-background')}>
                                <span className="last-row-sell"
                                      style={{color: props.sum < 0 ? 'rgb(255,0,0)' : 'rgb(110,255,60)'}}
                                >EUR</span>
            </div>
        </>
    )
}