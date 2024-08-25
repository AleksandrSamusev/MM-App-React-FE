import './TableTitle.css'
import {ArrowRed} from "../SVGs/ArrowRed.jsx";
import {ArrowGreen} from "../SVGs/ArrowGreen.jsx";
import {Sort} from "../SVGs/Sort.jsx";
import {Filter} from "../SVGs/Filter.jsx";
import {useState} from "react";

export const TableTitle = (props) => {

    const [isSortClicked, setIsSortClicked] = useState(false);

    function handleSortClick() {
        setIsSortClicked(!isSortClicked);
    }

    return (
        <div className="row mt-3 mb-4 wrapper">
            <div className="col-1">
                {props.title === 'Expense in current period' ? <ArrowRed/> : <ArrowGreen/>}
            </div>
            <div className="col-9 d-flex align-items-center justify-content-start">
                <span className="main-span-style">{props.title}</span>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-end">
                <div className="hovered" title="Filter" onClick={handleSortClick}
                     style={{
                         marginRight: '10px',
                         opacity:
                             ((props.title === 'Income in current period' && props.account.incomes.length <= 1)
                                 || (props.title === 'Expense in current period' && props.account.expenses.length <= 1))
                             && 0.65,
                         pointerEvents: ((props.title === 'Income in current period' && props.account.incomes.length <= 1)
                                 || (props.title === 'Expense in current period' && props.account.expenses.length <= 1))
                             && 'none'
                     }}>
                    <Filter/>
                </div>
                <div className="hovered" title="Sort"
                     style={{
                         opacity:
                             ((props.title === 'Income in current period' && props.account.incomes.length <= 1)
                                 || (props.title === 'Expense in current period' && props.account.expenses.length <= 1))
                             && 0.65,
                         pointerEvents: ((props.title === 'Income in current period' && props.account.incomes.length <= 1)
                                 || (props.title === 'Expense in current period' && props.account.expenses.length <= 1))
                             && 'none'
                     }}>
                    <Sort/>
                </div>
                <div className={"tooltip-box container " + (!isSortClicked && 'invisible')}>
                    <div className="row tooltip-row">
                        <div className="col-12">
                            <span className="tooltip-text">amount (high first)</span>
                        </div>
                    </div>
                    <div className="row tooltip-row">
                        <div className="col-12">
                            <span className="tooltip-text">amount (low first)</span>
                        </div>
                    </div>
                    <div className="row tooltip-row">
                        <div className="col-12">
                            <span className="tooltip-text">date (newest first)</span>
                        </div>
                    </div>
                    <div className="row tooltip-row">
                        <div className="col-12">
                            <span className="tooltip-text">date (oldest first)</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}