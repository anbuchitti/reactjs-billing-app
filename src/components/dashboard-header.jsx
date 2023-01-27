import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function DashboardHeader() {
    const navigate = useNavigate();

    useEffect(()=> {
        if(!localStorage.getItem('user'))
            LogoutCall();
    })

    function LogoutCall() {
        localStorage.clear();
        navigate('/');
    }

    return (
        <div className="header">
            <Link to='/dashboard'><i className='fa fa-angle-left'></i></Link>
            <label className="lgt" onClick={LogoutCall}>Logout</label>
        </div >
    )
}