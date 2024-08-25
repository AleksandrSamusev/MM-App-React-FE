import './ModalCustomInput.css'
import {Calendar} from "../Calendar/Calendar.jsx";
import {useState} from "react";


export const ModalCustomInput = (props) => {

    const [isInputClicked, setIsInputClicked] = useState(false);

    function handleDateClick() {
        setIsInputClicked(!isInputClicked);
    }

    return (
        <>
        <div className="row" style={{marginTop: '20px'}}>
            <div className="col-12" >
                <span className="input-label-style">{props.attribute}<span className="asterisk"> *</span></span>
                <input className="input-style"
                       onClick={handleDateClick}
                       name={props.attribute}
                       placeholder={props.placeholder}
                       value={props.val}
                       onChange={e=>props.setFunction(e.target.value)}/>
            </div>
        </div>
            <Calendar isInputClicked={isInputClicked} attribute={props.attribute}/>
        </>
    )
}