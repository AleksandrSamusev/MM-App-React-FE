import {TableRow} from "../TableRow.jsx";
import './Table.css'

export const Table = (props) => {

    let counter = props.counter;

    return (
        <div className={"container scrollable-container " + (props.arr.length > 5 && 'scrolling')}>
            {
                props.arr.length === 0 ?
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <span className="empty-container-span">{props.text}</span>
                    </div>
                    :
                    props.arr.map(item => {
                        counter++;
                        return (
                            <TableRow key={item.incomeId ? item.incomeId : item.expenseId}
                                      date={item.incomeDate ? item.incomeDate : item.expenseDate}
                                      amount={item.amount.toFixed(2)}
                                      to={item.paymentFrom ? item.paymentFrom : item.paymentTo}
                                      count={counter}/>
                        )
                    })
            }
        </div>
    )
}