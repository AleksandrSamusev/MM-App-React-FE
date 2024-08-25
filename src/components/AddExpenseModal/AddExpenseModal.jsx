import './AddExpenseModal.css'
import {ModalCustomInput} from "../ModalCustomInput/ModalCustomInput.jsx";
import {ModalAddButton} from "../ModalAddButton/ModalAddButton.jsx";
import {ModalCancelButton} from "../ModalCancelButton/ModalCancelButton.jsx";
import {BtnClose} from "../SVGs/BtnClose.jsx";
import {Calendar} from "../Calendar/Calendar.jsx";

export const AddExpenseModal = (props) => {
    return (
        <div className="main-modal-position">
            <div className="main-modal-style">
                <div className="d-flex justify-content-center align-items-center">
                    <span className="modal-title-text-style">ADD EXPENSE</span>
                    <div className="win-btn" onClick={props.handleClick} style={{
                        position: 'relative',
                        top: '-30px',
                        right: '-100px'
                    }}>
                        <BtnClose/>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <ModalCustomInput attribute={'date'} placeholder={"e.g. 24-03-2024"} val={props.date}
                                      setFunction={props.setDate}/>
                    <ModalCustomInput attribute={'amount'} placeholder={"e.g. 59.99"} val={props.amount}
                                      setFunction={props.setAmount}/>
                    <ModalCustomInput attribute={'to'} placeholder={"e.g. Mandatory payment"} val={props.to}
                                      setFunction={props.setTo}/>
                    <ModalAddButton addExpense={props.addExpense}/>
                    <ModalCancelButton handleClick={props.handleClick}/>

                </div>
            </div>
        </div>
    )
}