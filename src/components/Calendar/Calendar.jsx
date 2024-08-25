import './Calendar.css'
import {useState} from "react";
import {CollapseWhite} from "../SVGs/CollapseWhite.jsx";
import {ExpandWhite} from "../SVGs/ExpandWhite.jsx";
import {CollapseBlack} from "../SVGs/CollapseBlack.jsx";
import {ExpandBlack} from "../SVGs/ExpandBlack.jsx";
import {MonthsTable} from "./MonthsTable/MonthsTable.jsx";
import {YearsTable} from "./YearsTable/YearsTable.jsx";
import {DaysTableJanuary2024} from "./DaysTable/DaysTableJanuary2024.jsx";
import {DaysTableFebruary2024Leap} from "./DaysTable/DaysTableFebruary2024Leap.jsx";
import {DaysTableMarch2024} from "./DaysTable/DaysTableMarch2024.jsx";
import {DaysTableApril2024} from "./DaysTable/DaysTableApril2024.jsx";
import {DaysTableMay2024} from "./DaysTable/DaysTableMay2024.jsx";
import {DaysTableJune2024} from "./DaysTable/DaysTableJune2024.jsx";
import {DaysTableJuly2024} from "./DaysTable/DaysTableJuly2024.jsx";
import {DaysTableAugust2024} from "./DaysTable/DaysTableAugust2024.jsx";
import {DaysTableSeptember2024} from "./DaysTable/DaysTableSeptember2024.jsx";
import {DaysTableOctober2024} from "./DaysTable/DaysTableOctober2024.jsx";
import {DaysTableNovember2024} from "./DaysTable/DaysTableNovember2024.jsx";
import {DaysTableDecember2024} from "./DaysTable/DaysTableDecember2024.jsx";
import {getMonthName} from "../../services/CommonFunctions.jsx";

export const Calendar = (props) => {

    const [isYearClicked, setIsYearClicked] = useState(false);
    const [isMonthClicked, setIsMonthClicked] = useState(false);
    const [isYearHovered, setIsYearHovered] = useState(false);
    const [isMonthHovered, setIsMonthHovered] = useState(false);



    function handleDaySelection(event) {
        props.setSelectedDay(event.target.id);
        props.setIsDateClicked(!props.isDateClicked)
    }

    function handleMonthSelection(event) {
        props.setSelectedMonth(event.target.id);
        props.setSelectedMonthName(getMonthName(event.target.id));
        setIsMonthClicked(!isMonthClicked);
    }

    function handleYearClick() {
        setIsYearClicked(!isYearClicked);
    }

    function handleYearHover() {
        setIsYearHovered(!isYearHovered);
    }

    function handleMonthClick() {
        setIsMonthClicked(!isMonthClicked);
    }

    function handleMonthHover() {
        setIsMonthHovered(!isMonthHovered);
    }

    return (
        <div className={"" + ((props.attribute !== 'date' || !props.isInputClicked) && "invisible")  }
            style={{
                position: 'absolute',
                top: '168px',
                width: '352px',
                height: '215px',
                color: 'black',
                backgroundColor: 'white',
                border: '1px solid black',
                borderTop: 'none'
            }}
        >
            <div className="row" style={{fontFamily: 'Montserrat', fontSize: '16px', height: '40px'}}>
                <div onMouseEnter={handleMonthHover}
                     onMouseOut={handleMonthHover}
                     onClick={handleMonthClick}
                     className="col-6 d-flex align-items-center justify-content-center calendar-month">
                    <span style={{pointerEvents: 'none'}}>{props.selectedMonthName} {isMonthHovered ? (isMonthClicked ?
                        <CollapseWhite/> :
                        <ExpandWhite/>) : (isMonthClicked ? <CollapseBlack/> : <ExpandBlack/>)}</span>

                </div>
                <div onMouseEnter={handleYearHover}
                     onMouseOut={handleYearHover}
                     onClick={handleYearClick}
                     className="col-6 d-flex align-items-center justify-content-center calendar-month">
                    <span style={{pointerEvents: 'none'}}>2024 {isYearHovered ? (isYearClicked ? <CollapseWhite/> :
                        <ExpandWhite/>) : (isYearClicked ? <CollapseBlack/> : <ExpandBlack/>)}</span>
                </div>

                <MonthsTable isMonthClicked={isMonthClicked} isYearClicked={isYearClicked}
                             handleMonthSelection={handleMonthSelection}/>
                <YearsTable isYearClicked={isYearClicked}/>
            </div>

            <div className="row">
                <div className="col-12 d-flex align-items-center justify-content-center p-0">
                    {props.selectedMonth === '01' ? <DaysTableJanuary2024 handleDaySelection={handleDaySelection}/> :
                        props.selectedMonth === '02' ?
                            <DaysTableFebruary2024Leap handleDaySelection={handleDaySelection}/> :
                            props.selectedMonth === '03' ?
                                <DaysTableMarch2024 handleDaySelection={handleDaySelection}/> :
                                props.selectedMonth === '04' ?
                                    <DaysTableApril2024 handleDaySelection={handleDaySelection}/> :
                                    props.selectedMonth === '05' ?
                                        <DaysTableMay2024 handleDaySelection={handleDaySelection}/> :
                                        props.selectedMonth === '06' ?
                                            <DaysTableJune2024 handleDaySelection={handleDaySelection}/> :
                                            props.selectedMonth === '07' ?
                                                <DaysTableJuly2024 handleDaySelection={handleDaySelection}/> :
                                                props.selectedMonth === '08' ?
                                                    <DaysTableAugust2024 handleDaySelection={handleDaySelection}/> :
                                                    props.selectedMonth === '09' ? <DaysTableSeptember2024
                                                            handleDaySelection={handleDaySelection}/> :
                                                        props.selectedMonth === '10' ? <DaysTableOctober2024
                                                                handleDaySelection={handleDaySelection}/> :
                                                            props.selectedMonth === '11' ? <DaysTableNovember2024
                                                                    handleDaySelection={handleDaySelection}/> :
                                                                <DaysTableDecember2024
                                                                    handleDaySelection={handleDaySelection}/>
                    }
                </div>
            </div>
        </div>
    )
}