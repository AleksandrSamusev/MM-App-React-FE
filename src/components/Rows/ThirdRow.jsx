import './Rows.css'

export const ThirdRow = (props) => {
    return (
        <>
            <div className="col-8 d-flex align-items-center justify-content-start">
                <span className="row-title">Expense</span>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-end">
                <span className="row-sell">{props.sum}</span>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-center">
                <span className="row-sell">EUR</span>
            </div>
        </>
    )
}