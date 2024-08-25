import './ModalCancelButton.css'

export const ModalCancelButton = (props) => {
    return (
        <div className="row" style={{marginTop: '10px'}}>
            <div className="col-12 d-flex justify-content-center">
                <button onClick={props.handleClick} className="cancel-button-style">
                    <span className="cancel-button-text-style">CANCEL</span>
                </button>
            </div>
        </div>
    )
}