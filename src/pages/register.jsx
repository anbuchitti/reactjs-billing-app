import { Link, useNavigate } from 'react-router-dom';
import './../styles/home.css';
import { Formik, Field, Form } from 'formik';
import { registrationCall } from './../service/api-call';
import { useEffect, useState } from 'react';

export default function Register() {
    const navigate = useNavigate();
    let [ispassicon, setIspassicon] = useState(true)

    useEffect(()=> {
        if(localStorage.getItem('user'))
            navigate('/dashboard')
    })

    return (
        <div className="container">
            <div className="screen-frame">
                <Link to="/"><i className="fa fa-angle-left"></i></Link>
                <div className="upper-sec ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#fff" fillOpacity="1"
                            d="M0,160L26.7,181.3C53.3,203,107,245,160,250.7C213.3,256,267,224,320,224C373.3,224,427,256,480,261.3C533.3,267,587,245,640,202.7C693.3,160,747,96,800,96C853.3,96,907,160,960,202.7C1013.3,245,1067,267,1120,250.7C1173.3,235,1227,181,1280,160C1333.3,139,1387,149,1413,154.7L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z">
                        </path>
                    </svg>
                    <h1>Create New Account</h1>
                </div>
            </div>
            <div className="lower-sec">
                <Formik
                    initialValues={{
                        username: '',
                        password: ''
                    }}

                    onSubmit={(values) => {
                        registrationCall(values).then((result) => {
                            if (result.data.error === false) {
                                localStorage.setItem('user', JSON.stringify(result.data.data._id))
                                navigate('/dashboard')
                            }
                        });
                    }}
                >
                    <Form>
                        <div className="register-form">
                            <div className="form-control">
                                <i className="fa fa-user"></i>
                                <Field type="text" placeholder="First Name" aria-label="First Name" name="firstname" required autoFocus className="form-field" />
                            </div>
                            <div className="form-control">
                                <i className="fa fa-mobile"></i>
                                <Field type="number" placeholder="Mobile Number" aria-label="Mobile Number" name="username" required className="form-field" />
                            </div>
                            <div className="form-control">
                                <i className="fa fa-calendar"></i>
                                <Field id='dob' type="date" placeholder="Date of Birth" aria-label="Date of Birth" name="dob" required className="form-field"
                                 onFocus={()=>document.getElementById("dob").type = "date"} onBlur={()=>document.getElementById("dob").type = "text"} />
                            </div>
                            <div className="form-control">
                                <i className="fa fa-lock"></i>
                                <Field type="password" placeholder="Password" aria-label="Password" name="password" required className="form-field" />
                                {
                                    (ispassicon ? <i className='fa fa-eye-slash' onClick={()=>{
                                        setIspassicon(false);
                                        document.getElementsByName("password")[0].type = "text";
                                    }}></i> : <i className='fa fa-eye' onClick={()=>{
                                        setIspassicon(true);
                                        document.getElementsByName("password")[0].type = "password";
                                    }}></i>)   
                                }
                            </div>
                            <button className="primary-btn">Sign Up</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}