import { Link, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import './../styles/home.css';

export default function Home() {
    const navigate = useNavigate();

    useEffect(()=> {
        if(localStorage.getItem('user'))
            navigate('/dashboard')
    })
 
    return (
        <div className="screen-frame container" v-show="!(islogin || isregister)">
            <div className="frame-design">
                <div className="logo"></div>
                <div className="info-section">
                    <div className="action">
                        <button className="login-btn"><Link to='/login'>Login</Link></button>
                        <button className="register-btn"><Link to='/register'>Register</Link></button>
                    </div>
                    <div className="info">
                        <h1 className="title">Billing App</h1>
                        <p>We are providing billing you income and expense with chart explaination, like small scale of business</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
