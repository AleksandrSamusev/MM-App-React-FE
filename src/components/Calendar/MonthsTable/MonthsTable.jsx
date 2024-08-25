export const MonthsTable = (props) => {
    return (
        <div className={"months " + (!props.isMonthClicked && 'invisible')}
             style={{
                 position: 'absolute',
                 top: '40px',
                 width: '175px',
                 height: '175px',
                 color: 'black',
                 backgroundColor: 'white',
                 border: '1px solid black',
                 borderLeft: 'none',
                 borderRight: props.isYearClicked ? 'none' : '1px solid black'
             }}>
            <div className="row" style={{height: '29px'}}>
                <div id="01" onClick={props.handleMonthSelection} className="col-6 d-flex align-items-center justify-content-center month">
                    Jan
                </div>
                <div id="02" onClick={props.handleMonthSelection} className="col-6 d-flex align-items-center justify-content-center month">
                    Feb
                </div>
            </div>
            <div className="row" style={{height: '29px'}}>
                <div id="03" onClick={props.handleMonthSelection} className="col-6 d-flex align-items-center justify-content-center month">
                    Mar
                </div>
                <div id="04" onClick={props.handleMonthSelection} className="col-6 d-flex align-items-center justify-content-center month">
                    Apr
                </div>
            </div>
            <div className="row" style={{height: '29px'}}>
                <div id="05" onClick={props.handleMonthSelection} className="col-6 d-flex align-items-center justify-content-center month">
                    May
                </div>
                <div id="06" onClick={props.handleMonthSelection} className="col-6 d-flex align-items-center justify-content-center month">
                    Jun
                </div>
            </div>
            <div className="row" style={{height: '29px'}}>
                <div id="07" onClick={props.handleMonthSelection} className="col-6 d-flex align-items-center justify-content-center month">
                    Jul
                </div>
                <div id="08" onClick={props.handleMonthSelection} className="col-6 d-flex align-items-center justify-content-center month">
                    Aug
                </div>
            </div>
            <div className="row" style={{height: '29px'}}>
                <div id="09" onClick={props.handleMonthSelection} className="col-6 d-flex align-items-center justify-content-center month">
                    Sep
                </div>
                <div id="10" onClick={props.handleMonthSelection} className="col-6 d-flex align-items-center justify-content-center month">
                    Oct
                </div>
            </div>
            <div className="row" style={{height: '29px'}}>
                <div id="11" onClick={props.handleMonthSelection} className="col-6 d-flex align-items-center justify-content-center month">
                    Nov
                </div>
                <div id="12" onClick={props.handleMonthSelection} className="col-6 d-flex align-items-center justify-content-center month">
                    Dec
                </div>
            </div>
        </div>
    )
}