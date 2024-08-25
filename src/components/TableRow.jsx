export const TableRow = (props) => {
    return (
        <div className="row" style={{
            backgroundColor: props.count%2 === 0 ? 'rgba(129, 120, 120, 0.3)' : 'rgba(24,43,61,0.7)',
            height: '40px'
        }}>
            <div className="col-4 d-flex align-items-center justify-content-center">
                <span style={{color: 'white', fontFamily: 'Montserrat', fontSize: '16px'}}>{props.date}</span>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-start">
                <span style={{color: 'white', fontFamily: 'Montserrat', fontSize: '16px'}}>{props.amount}</span>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-end">
                <span style={{color: 'white', fontFamily: 'Montserrat', fontSize: '16px'}}>{props.to}</span>
            </div>
        </div>

    )
}