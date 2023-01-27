import React from 'react';
import { Link } from 'react-router-dom';
import DashboardHeader from '../components/dashboard-header';

export default function Dashboard() {
    return (
        <div className="container">
            <DashboardHeader></DashboardHeader>
            <div className="list-item">
                <li className="card-item"><Link to="/account-type">Account Type</Link></li>
                <li className="card-item"><Link to="/income-generator">Income Generate</Link></li>
                <li className="card-item"><Link to="/income-record">Income Record</Link></li>
                <li className="card-item"><Link to="/expense-generator">Expense Generate</Link></li>
                <li className="card-item"><Link to="/expense-record">Expense Record</Link></li>
            </div>
        </div>
    )
}