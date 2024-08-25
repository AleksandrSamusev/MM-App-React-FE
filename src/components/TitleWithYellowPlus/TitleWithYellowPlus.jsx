import {PlusYellow} from "../SVGs/PlusYellow.jsx";
import './TitleWithYellowPlus.css'

export const TitleWithYellowPlus = (props) => {
    return (
        <>

            <div className="col-7 offset-1 d-flex align-items-center justify-content-end">
                <span className="btn-label-style">{props.title}</span>
            </div>
            <div id={props.accountId} className="col-2 d-flex align-items-center justify-content-start"
                 onClick={() => {
                     props.onClick(props.accountId)
                 }}
            >
                <PlusYellow/>
            </div>
        </>
    )
}