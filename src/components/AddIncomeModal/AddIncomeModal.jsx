import './AddIncomeModal.css'
import {ModalCustomInput} from "../ModalCustomInput/ModalCustomInput.jsx";
import {ModalAddIncomeButton} from "../ModalAddIncomeButton/ModalAddIncomeButton.jsx";
import {ModalCancelIncomeButton} from "../ModalCancelIncomeButton/ModalCancelIncomeButton.jsx";
import {BtnClose} from "../SVGs/BtnClose.jsx";

export const AddIncomeModal = (props) => {
    return (
        <div className="main-modal-position">
            <div className="main-modal-style">
                <div className="d-flex justify-content-center align-items-center">
                    <span className="modal-title-text-style">ADD INCOME</span>
                    <div className="win-btn" onClick={props.handleIncomeClick} style={{
                        position: 'relative',
                        top: '-30px',
                        right: '-100px'
                    }}>
                        <BtnClose/>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <ModalCustomInput attribute={'date'} placeholder={"e.g. 24-03-2024"} val={props.incomeDate}
                                      setFunction={props.setIncomeDate}/>
                    <ModalCustomInput attribute={'amount'} placeholder={"e.g. 59.99"} val={props.incomeAmount}
                                      setFunction={props.setIncomeAmount}/>
                    <ModalCustomInput attribute={'from'} placeholder={"e.g. Mandatory payment"} val={props.from}
                                      setFunction={props.setFrom}/>
                    <ModalAddIncomeButton addIncome={props.addIncome}/>
                    <ModalCancelIncomeButton handleIncomeClick={props.handleIncomeClick}/>
                </div>
            </div>
        </div>
    )
}