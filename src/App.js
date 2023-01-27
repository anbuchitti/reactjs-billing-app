import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import ExpenseRecord from './pages/expense-record';
import ExpenseGenerator from './pages/expense-generator';
import AccountType from './pages/account-type';
export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/expense-record' element={<ExpenseRecord/>}></Route>
          <Route path='/expense-generator' element={<ExpenseGenerator/>}></Route>
          <Route path='/account-type' element={<AccountType/>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
