import {NavbarAuth} from "../../components/NavbarAuth.jsx";
import {ManageCardSection} from "../../components/ManageCardSection/ManageCardSection.jsx";
import {SpinnerLoading} from "../../utils/SpinnerLoading.jsx";
import {useEffect, useState} from "react";
import {getToken} from "../../services/AuthService.jsx";
import {ManagePageTopBlock} from "../../components/ManagePageTopBlock.jsx";
import {AddExpenseModal} from "../../components/AddExpenseModal/AddExpenseModal.jsx";
import {IncomeAndExpenseTables} from "../../components/IncomeAndExpenseTables/IncomeAndExpenseTables.jsx";
import './ManagePage.css'
import {AddIncomeModal} from "../../components/AddIncomeModal/AddIncomeModal.jsx";
import {getCurrentMonth} from "../../services/CommonFunctions.jsx";

const ManagePage = () => {

    const [currentBalance, setCurrentBalance] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);
    const [isVisible, setIsVisible] = useState(true);
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState(null);
    const [to, setTo] = useState('');
    const [incomeDate, setIncomeDate] = useState('');
    const [incomeAmount, setIncomeAmount] = useState(null);
    const [from, setFrom] = useState('');
    const [accountId, setAccountId] = useState('');
    const [accounts, setAccounts] = useState([]);
    const [isAddIncomeClicked, setIsAddIncomeClicked] = useState(false)
    const [isAddExpenseClicked, setIsAddExpenseClicked] = useState(false)

    const [selectedPeriod, setSelectedPeriod] = useState(getCurrentMonth)

    let counter = 0;


    function getDiff() {
        let total = 0;
        accounts.map(acc => {
            total = total + acc.accountDiff;
        });
        return total;
    }

    function onMonthClick(event) {
        if (event.target.id !== selectedPeriod) {
            setAccounts([]);
            setSelectedPeriod(event.target.id);
        }
    }

    function onQuarterClick(event) {
        if (event.target.id !== selectedPeriod) {
            setAccounts([]);
            setSelectedPeriod(event.target.id);
        }
    }

    function handleClick(id) {
        setIsAddIncomeClicked(false)
        setIsAddExpenseClicked(true)
        setAccountId(id);
        setIsVisible(!isVisible);
        setDate('');
        setAmount('');
        setTo('');
    }

    function handleIncomeClick(id) {
        setIsAddExpenseClicked(false)
        setIsAddIncomeClicked(true)
        setAccountId(id);
        setIsVisible(!isVisible);
        setIncomeDate('');
        setIncomeAmount('');
        setFrom('');
    }

    useEffect(() => {
        const fetchAccounts = async () => {
            setAccounts([]);
            const token = getToken();
            const headers = {'Authorization': `${token}`};
            const url = `http://localhost:8080/api/v1/accounts?month=${selectedPeriod}`;
            const response = await fetch(url, {headers});
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const responseJson = await response.json();
            responseJson.map(data => {
                let diff = 0;
                const account = {
                    bankName: "",
                    accountId: null,
                    currency: "",
                    currentBalance: 0.0,
                    incomes: [],
                    expenses: [],
                    accountDiff: 0
                }
                account.bankName = data.bankName;
                account.accountId = data.accountId;
                account.currency = data.currency;
                account.currentBalance = data.currentBalance;
                account.incomes = data.incomes.sort((a, b) => a.incomeId - b.incomeId);
                for (let i = 0; i < account.incomes.length; i++) {
                    diff = diff + account.incomes[i].amount;
                }
                account.expenses = data.expenses.sort((a, b) => a.expenseId - b.expenseId);
                for (let i = 0; i < account.expenses.length; i++) {
                    diff = diff - account.expenses[i].amount;
                }
                account.accountDiff = Math.round(diff * 100) / 100;
                setAccounts(oldArray => [...oldArray, account]);
            });
            setIsLoading(false);
        };
        fetchAccounts().catch(error => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, [currentBalance, selectedPeriod]);


    async function addExpense() {
        const url = `http://localhost:8080/api/v1/expenses/accounts/${accountId}`;
        const expenseDto = {
            expenseDate: date,
            amount: amount,
            paymentTo: to
        }
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getToken()
            },
            body: JSON.stringify(expenseDto)
        };
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }
        const responseJson = await response.json();
        setCurrentBalance(responseJson.currentBalance);
        setDate('');
        setAmount('');
        setTo('');
        setIsVisible(!isVisible);
    }

    async function addIncome() {
        const url = `http://localhost:8080/api/v1/incomes/accounts/${accountId}`;
        const incomeDto = {
            incomeDate: incomeDate,
            amount: incomeAmount,
            paymentFrom: from
        }
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getToken()
            },
            body: JSON.stringify(incomeDto)
        };
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }
        const responseJson = await response.json();
        setCurrentBalance(responseJson.currentBalance);
        setIncomeDate('');
        setIncomeAmount('');
        setFrom('');
        setIsVisible(!isVisible);
    }

    if (isLoading) {
        return (<SpinnerLoading/>)
    }

    if (httpError) {
        return (<div className="container m-5"><p>{httpError}</p></div>)
    }

    return (
        <>
            {
                isAddExpenseClicked &&
                <div className={"vw-100 dark-layout-style " + (isVisible && 'hidden')}>
                    <AddExpenseModal setDate={setDate} date={date} amount={amount} setAmount={setAmount}
                                     to={to} setTo={setTo} addExpense={addExpense} handleClick={handleClick}/>
                </div>
            }
            {
                isAddIncomeClicked &&
                <div className={"vw-100 dark-layout-style " + (isVisible && 'hidden')}>
                    <AddIncomeModal setIncomeDate={setIncomeDate} incomeDate={incomeDate} incomeAmount={incomeAmount}
                                    setIncomeAmount={setIncomeAmount} from={from} setFrom={setFrom}
                                    addIncome={addIncome} handleIncomeClick={handleIncomeClick}/>
                </div>
            }

            <NavbarAuth/>
            <section className="container">
                <div className="row" style={{marginTop: '25px'}}>
                    <ManagePageTopBlock/>

                    <div className="col-6">
                        <div className="row">
                            <div className="col-6 d-flex align-items-center justify-content-center"
                                 style={{
                                     color: 'white',
                                     backgroundColor: 'rgba(24,43,61,0.7)',
                                     fontFamily: 'Antonio',
                                     fontSize: '42px',
                                     fontWeight: '500'
                                 }}>
                                <span style={{paddingBottom: '6px'}}>{
                                    selectedPeriod === 'q1' ? '1st Quarter total' :
                                        selectedPeriod === 'q2' ? '2nd Quarter total' :
                                            selectedPeriod === 'q3' ? '3rd Quarter total' :
                                                selectedPeriod === 'q4' ? '4th Quarter total' :
                                                    selectedPeriod + ' total'
                                }</span>
                            </div>
                            <div className="col-6 d-flex justify-content-center align-items-center"
                                 style={{
                                     color: getDiff() < 0 ? 'red' : 'rgb(110,255,60)',
                                     backgroundColor: getDiff() < 0 ? 'rgba(255,0,0,0.3)' : 'rgba(110,255,60,0.3)',
                                     fontFamily: 'Antonio',
                                     fontSize: '60px',
                                     fontWeight: '400'
                                 }}>
                                <span style={{paddingBottom: '6px'}}>{getDiff().toFixed(2)} €</span>
                            </div>
                        </div>
                    </div>
                </div>
                {accounts.map((account, index) => {
                    return (
                        <>
                            <div className="row" style={{marginTop: '50px'}}>
                                <ManageCardSection
                                    key={account.accountId}
                                    account={account}
                                    onClick={handleClick}
                                    onIncomeClick={handleIncomeClick}
                                    period={selectedPeriod}
                                    onMonthClick={onMonthClick}
                                    onQuarterClick={onQuarterClick}
                                />
                                <IncomeAndExpenseTables counter={counter} account={account}/>
                            </div>
                            {
                                index !== accounts.length - 1
                                &&
                                <>
                                    <hr style={{color: 'white', opacity: '0.3'}}/>
                                </>
                            }
                        </>
                    )
                })}
            < /section>
        </>
    )
}

export {
    ManagePage
}