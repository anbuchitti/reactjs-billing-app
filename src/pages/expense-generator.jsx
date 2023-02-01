import { useEffect, useState } from 'react';
import DashboardHeader from '../components/dashboard-header';
import ExpenseTableComponent from '../components/expense-table';
import { gettodayexpense, getAllTypename, submitExpense } from './../service/api-call';

export default function ExpenseGenerator() {
    let [todayExpenseList, setTodayExpenseList] = useState([]);
    let [typenamelist, setTypenamelist] = useState([]);
    let [reqPayload, setReqPaylod] = useState({})

    useEffect(() => {
        getAllTypename().then((items) => {
            setTypenamelist(items.data);
            setReqPaylod({
                typename: items.data[0].uniqueid,
                remarks: '',
                amount: 0
            })
        })
        getExpenseList();
    }, [])

    function getExpenseList() {
        gettodayexpense().then((items) => {
            setTodayExpenseList(items.data);
        })
    }

    function clearForm() {
        document.getElementsByName('typename')[0].value = '';
        document.getElementsByName('remarks')[0].value = '';
        document.getElementsByName('amount')[0].value = '';
    }

    function submitForm() {
        submitExpense(reqPayload).then((res) => {
            getExpenseList();
            clearForm();
        })
    }

    return (
        <div className="container">
            <DashboardHeader></DashboardHeader>
            <div className="form-sec">
                <div className="form-control">
                    <label className="lft-label">Type Name</label>
                    <select type="text" className="form-field" name='typename' onChange={(event) => {
                        setReqPaylod(reqPayload = { ...reqPayload, typename: event.target.value })
                    }}>
                        {typenamelist.map((m) => <option value={m.uniqueid} key={m.uniqueid}>{m.typename}</option>)}
                    </select>
                </div>

                <div className="form-control">
                    <label className="lft-label">Remarks</label>
                    <input type="text" className="form-field" name='remarks' onChange={(event) => {
                        setReqPaylod(reqPayload = { ...reqPayload, remarks: event.target.value })
                    }} />
                </div>
                <div className="form-control">
                    <label className="lft-label">Amount</label>
                    <input type="number" className="form-field" name='amount' onChange={(event) => {
                        setReqPaylod(reqPayload = {
                            ...reqPayload,
                            amount: event.target.value
                        })
                    }} />
                </div>
                <button className="primary-btn" onClick={submitForm}>submit</button>
            </div>
            <div>
                <ExpenseTableComponent expenselist={todayExpenseList} loadExpenseData={getExpenseList} />
            </div>
        </div >
    )
}