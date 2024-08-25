import './ModalAddIncomeButton.css'

export const ModalAddIncomeButton = (props) => {
    return (
        <div className="row" style={{marginTop: '50px'}}>
            <div className="col-12 d-flex justify-content-center">
                <button className="button-style" onClick={props.addIncome} >
                    <span className="button-text-style">ADD</span>
                </button>
            </div>
        </div>
    )
}