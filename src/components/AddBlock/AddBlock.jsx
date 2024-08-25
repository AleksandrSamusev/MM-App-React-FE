import {TitleWithYellowPlus} from "../TitleWithYellowPlus/TitleWithYellowPlus.jsx";
import {ArrowGreen} from "../SVGs/ArrowGreen.jsx";
import './AddBlock.css'
import {ArrowRed} from "../SVGs/ArrowRed.jsx";

export const AddBlock = (props) => {
    return (
        <div className="col-6">
            <div className="row">
                <div className="col-12 d-flex align-items-center justify-content-center" >
                    {props.account.accountDiff >= 0 ? <ArrowGreen/> : <ArrowRed />}
                    <span className="price-span" style={{paddingLeft: '15px'}}>{props.account.accountDiff.toFixed(2)} €</span>
                </div>
            </div>
            <div className="row" style={{marginTop: '20px'}}>
                <TitleWithYellowPlus title='Add expense' onClick={props.onClick} accountId={props.accountId}/>
            </div>
            <div className="row" style={{marginTop: '10px'}}>
                <TitleWithYellowPlus title='Add income' onClick={props.onIncomeClick} accountId={props.accountId}/>
            </div>
        </div>
    )
}