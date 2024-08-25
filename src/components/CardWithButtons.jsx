import {CardPayoneer} from "./SVGs/CardPayoneer.jsx";
import {CardPostanska} from "./SVGs/CardPostanska.jsx";
import {AddBlock} from "./AddBlock/AddBlock.jsx";

export const CardWithButtons = (props) => {
    return (
        <>
            <div className="col-6 d-flex align-items-center p-0 justify-content-start">
                {
                    props.bankName === 'Payoneer' ?
                        <CardPayoneer/> : <CardPostanska/>
                }
            </div>
            <AddBlock
                sum={props.sum}
                onClick = {props.onClick}
                onIncomeClick={props.onIncomeClick}
                accountId = {props.accountId}
                balance = {props.balance}
                account={props.account}
            />
        </>
    )
}