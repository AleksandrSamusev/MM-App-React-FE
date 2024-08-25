import './ModalCancelIncomeButton.css'

export const ModalCancelIncomeButton = (props) => {
    return (
        <div className="row" style={{marginTop: '10px'}}>
            <div className="col-12 d-flex justify-content-center">
                <button onClick={props.handleIncomeClick} className="cancel-button-style">
                    <span className="cancel-button-text-style">CANCEL</span>
                </button>
            </div>
        </div>
    )
}