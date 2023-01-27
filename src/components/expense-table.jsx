import { format } from "date-fns";
import React from "react";
export default function ExpenseTableComponent(props) {
    return (
        <table id="customers">
            <thead>
                <tr>
                    <th>Datetime</th>
                    <th>Expense Type</th>
                    <th>Expense Amount</th>
                </tr>
            </thead>
            <tbody>
                {props.expenselist.map((e, ind) => (
                    <tr key={e._id}>
                        <td>{format(new Date(e.timestamp), 'LLL do yyyy HH:mm')}</td>
                        <td>{e.typename}</td>
                        <td>{e.amount}</td>
                    </tr>
                ))}

            </tbody>
        </table>
    )
}
