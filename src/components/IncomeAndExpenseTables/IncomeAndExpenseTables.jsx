import {Table} from "../Table/Table.jsx";
import {TableTitle} from "../TableTitle/TableTitle.jsx";

export const IncomeAndExpenseTables = (props) => {

    return (
        <div className="col-6" style={{marginTop: '40px'}}>
            <TableTitle title='Income in current period' account={props.account}/>
            <hr style={{color: "white"}}/>
            <Table arr={props.account.incomes} text='No incomes for now' counter={props.counter}/>
            <br/>
            <TableTitle title='Expense in current period' account={props.account}/>
            <hr style={{color: "white"}}/>
            <Table arr={props.account.expenses} text='No expenses for now' counter={props.counter}/>
        </div>
    )
}