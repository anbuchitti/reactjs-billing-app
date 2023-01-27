import ExpenseTableComponent from '../components/expense-table';
import { Formik, Field, Form } from 'formik';
import { getallexpenseRecord } from './../service/api-call';
import { useState } from 'react';
import DashboardHeader from '../components/dashboard-header';

export default function ExpenseRecord() {
    let [expenseItems, setExpenseItems] = useState([]);

    return (
        <div className="container">
            <DashboardHeader></DashboardHeader>
            <Formik
                initialValues={{
                    startdate: '',
                    enddate: ''
                }}
                onSubmit={(values) => {
                    getallexpenseRecord(values).then((items) => {
                        setExpenseItems(expenseItems = items.data);
                    });
                }}
            >
                <Form>
                    <div className="form-sec">
                        <div className="form-control">
                            <label className="lft-label">Start Date</label>
                            <Field type="date" className="form-field" name='startdate' />
                        </div>

                        <div className="form-control">
                            <label className="lft-label">End Date</label>
                            <Field type="date" className="form-field" name='enddate' />
                        </div>
                        <button className="primary-btn" type='submit'>Filter</button>
                    </div>
                </Form>
            </Formik>
            <div>
                <ExpenseTableComponent expenselist={expenseItems} />
            </div>
        </div>

    )
}