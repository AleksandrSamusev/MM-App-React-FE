import {getCurrentMonth} from "../../services/CommonFunctions.jsx";
import './MonthBlock.css'

export const MonthBlock = (props) => {


    function getMonthNumber(input) {
        if (input === 'January') {
            return '01'
        } else if (input === 'February') {
            return '02'
        } else if (input === 'March') {
            return '03'
        } else if (input === 'April') {
            return '04'
        } else if (input === 'May') {
            return '05'
        } else if (input === 'June') {
            return '06'
        } else if (input === 'July') {
            return '07'
        } else if (input === 'August') {
            return '08'
        } else if (input === 'September') {
            return '09'
        } else if (input === 'October') {
            return '10'
        } else if (input === 'November') {
            return '11'
        } else if (input === 'December') {
            return '12'
        }
    }

    function getMonthName(input) {
        if (input === '01') {
            return 'January'
        } else if (input === '02') {
            return 'February'
        } else if (input === '03') {
            return 'March'
        } else if (input === '04') {
            return 'April'
        } else if (input === '05') {
            return 'May'
        } else if (input === '06') {
            return 'June'
        } else if (input === '07') {
            return 'July'
        } else if (input === '08') {
            return 'August'
        } else if (input === '09') {
            return 'September'
        } else if (input === '10') {
            return 'October'
        } else if (input === '11') {
            return 'November'
        } else if (input === '12') {
            return 'December'
        }
    }

    function isMonthInFuture(month) {
        let currentMonth = getCurrentMonth();
        let currentMonthAsNumber = parseInt(getMonthNumber(currentMonth), 10);
        return parseInt(month, 10) > currentMonthAsNumber;

    }

    return (
        <div className="col-3 d-flex align-items-center justify-content-center "
             style={{paddingLeft: '2px', paddingRight: '2px'}}>
            <span id={getMonthName(props.month1)} onClick={!isMonthInFuture(props.month1) && props.onMonthClick}
                  className={"manage-month " + (isMonthInFuture(props.month1) && 'no-events')}
                  style={{
                      textAlign: 'center',
                      width: '33%',
                      backgroundColor: getMonthNumber(props.period) === props.month1 && '#FFF171',
                      color: getMonthNumber(props.period) === props.month1 ? 'black' : isMonthInFuture(props.month1) && 'rgba(255,255,255,0.3)'
                  }}>{props.month1}</span>

            <span id={getMonthName(props.month2)} onClick={!isMonthInFuture(props.month2) && props.onMonthClick}
                  className={"manage-month " + (isMonthInFuture(props.month2) && 'no-events')}
                  style={{
                      textAlign: 'center',
                      width: '33%',
                      backgroundColor: getMonthNumber(props.period) === props.month2 && '#FFF171',
                      color: getMonthNumber(props.period) === props.month2 ? 'black' : isMonthInFuture(props.month2) && 'rgba(255,255,255,0.3)'
                  }}>{props.month2}</span>

            <span id={getMonthName(props.month3)} onClick={!isMonthInFuture(props.month3) && props.onMonthClick}
                  className={"manage-month " + (isMonthInFuture(props.month3) && 'no-events')}
                  style={{
                      textAlign: 'center',
                      width: '33%',
                      backgroundColor: getMonthNumber(props.period) === props.month3 && '#FFF171',
                      color: getMonthNumber(props.period) === props.month3 ? 'black' : isMonthInFuture(props.month3) && 'rgba(255,255,255,0.3)'
                  }}>{props.month3}</span>
        </div>
    )
}