import {FirstRow} from "../Rows/FirstRow.jsx";
import {CardWithButtons} from "../CardWithButtons.jsx";
import {MonthRow} from "../MonthRow.jsx";
import {QuarterRow} from "../QuarterRow.jsx";
import {SubtitleRow} from "../SubtitleRow.jsx";
import {SecondRow} from "../Rows/SecondRow.jsx";
import {ThirdRow} from "../Rows/ThirdRow.jsx";
import {FourthRow} from "../Rows/FourthRow.jsx";
import {FifthRow} from "../Rows/FifthRow.jsx";
import './ManageCardSection.css'

export const ManageCardSection = (props) => {

    function calculateIncome(incomes) {
        let sum = 0;
        incomes.forEach(income => sum += income.amount);
        return sum;
    }

    function calculateExpense(expenses) {
        let sum = 0;
        expenses.forEach(expense => sum += expense.amount);
        return sum;
    }

    return (

        <div className="col-6">
            <div className="container px-5 py-3">
                <div className="row"><SubtitleRow/></div>
                <div className="row" style={{marginTop: '25px'}}>
                    <QuarterRow period={props.period} onQuarterClick={props.onQuarterClick}/>
                </div>
                <div className="row" style={{marginTop: '5px'}}>
                    <MonthRow period={props.period} onMonthClick={props.onMonthClick}/>
                </div>
                <div className="row" style={{marginTop: '50px', marginBottom: '50px'}}>
                    <CardWithButtons
                        bankName={props.account.bankName}
                        accountId={props.account.accountId}
                        balance={props.account.currentBalance}
                        onClick={props.onClick}
                        onIncomeClick={props.onIncomeClick}
                        account={props.account}
                    />
                </div>
                <hr style={{color: 'white', opacity: '0.3'}}/>
                {<div className="row row-with-background">
                    <FirstRow sum={props.account.currentBalance.toFixed(2)}/>
                </div>}

                <div className="row row-without-background">
                    <SecondRow color='White' sum={calculateIncome(props.account.incomes).toFixed(2)}/>
                </div>

                <div className="row row-without-background">
                    <ThirdRow color='White' sum={calculateExpense(props.account.expenses).toFixed(2)}/>
                </div>

                {<div className="row row-with-background">
                    <FourthRow
                        color='White'
                        sum={((calculateIncome(props.account.incomes) -
                            calculateExpense(props.account.expenses))).toFixed(2)}
                    />
                </div>}

                <div className="row row-without-background">
                    <FifthRow
                        color='White'
                        sum={(calculateIncome(props.account.incomes) -
                            calculateExpense(props.account.expenses)).toFixed(2)}
                    />
                </div>
            </div>
        </div>

    )
}