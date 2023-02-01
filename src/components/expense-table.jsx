import { format } from "date-fns";
import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { DeleteExpense } from "../service/api-call";

export default function ExpenseTableComponent(props) {
    return (
        <table id="customers">
            <thead>
                <tr>
                    <th>Datetime</th>
                    <th>Expense Type</th>
                    <th>Expense Amount</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {props.expenselist.map((e, ind) => (
                    <tr key={e._id}>
                        <td>{format(new Date(e.timestamp), 'LLL do yyyy HH:mm')}</td>
                        <td>{e.typename}</td>
                        <td>{e.amount}</td>
                        <td><FaPencilAlt className="hov clr-blu" /> / <FaTrashAlt onClick={
                            (id) => {
                                DeleteExpense(e._id).then((res) => {
                                    if(res.data.deletedCount)
                                        props.loadExpenseData();
                                })
                            }
                        } className="hov clr-red" /></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

