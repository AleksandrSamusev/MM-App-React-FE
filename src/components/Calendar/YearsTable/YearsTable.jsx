export const YearsTable = (props) => {
    return (
        <div className={"months " + (!props.isYearClicked && 'invisible')}
             style={{
                 position: 'absolute',
                 top: '40px',
                 left: '175px',
                 width: '175px',
                 height: '175px',
                 color: 'black',
                 backgroundColor: 'white',
                 border: '1px solid black',
                 borderRight: 'none'
             }}>
            <div className="row" style={{height: '29px'}}>
                <div className="col-6 d-flex align-items-center justify-content-center month">
                    2024
                </div>
                <div className="col-6 d-flex align-items-center justify-content-center month">
                    2030
                </div>
            </div>
            <div className="row" style={{height: '29px'}}>
                <div className="col-6 d-flex align-items-center justify-content-center month">
                    2025
                </div>
                <div className="col-6 d-flex align-items-center justify-content-center month">
                    2031
                </div>
            </div>
            <div className="row" style={{height: '29px'}}>
                <div className="col-6 d-flex align-items-center justify-content-center month">
                    2026
                </div>
                <div className="col-6 d-flex align-items-center justify-content-center month">
                    2032
                </div>
            </div>
            <div className="row" style={{height: '29px'}}>
                <div className="col-6 d-flex align-items-center justify-content-center month">
                    2027
                </div>
                <div className="col-6 d-flex align-items-center justify-content-center month">
                    2033
                </div>
            </div>
            <div className="row" style={{height: '29px'}}>
                <div className="col-6 d-flex align-items-center justify-content-center month">
                    2028
                </div>
                <div className="col-6 d-flex align-items-center justify-content-center month">
                    2034
                </div>
            </div>
            <div className="row" style={{height: '29px'}}>
                <div className="col-6 d-flex align-items-center justify-content-center month">
                    2029
                </div>
                <div className="col-6 d-flex align-items-center justify-content-center month">
                    2035
                </div>
            </div>
        </div>
    )
}