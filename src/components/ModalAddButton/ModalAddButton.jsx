import './ModalAddButton.css'

export const ModalAddButton = (props) => {
    return (
        <div className="row" style={{marginTop: '50px'}}>
            <div className="col-12 d-flex justify-content-center">
                <button className="button-style" onClick={props.addExpense} >
                    <span className="button-text-style">ADD</span>
                </button>
            </div>
        </div>
    )
}