import {Link} from "react-router-dom";

export const CustomButton = (props) => {
    return (
        <div id={props.id} className="btn-main d-flex align-items-center justify-content-center"  onClick={props.onClick}>
            <Link className="text-center button-link" style={{pointerEvents: 'none'}} to={props.link}>{props.title}</Link>
        </div>
    )
}