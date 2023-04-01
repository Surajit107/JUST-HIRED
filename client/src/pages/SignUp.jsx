import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux'
import { signupReq } from '../services/slice/AuthSlice';

const SignUp = () => {
    const [signupData, setSignupData] = useState({
        full_name: "",
        email: "",
        phone: "",
        password: ""
    })
    const [confPassword, setConfPassword] = useState({ confPassword: "" })
    const navigate = useNavigate()
    const dispatch = useDispatch()


    // handleChance function
    const handleChange = (e) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value })
    }

    // handleSubmit function
    const handleSubmit = (e) => {
        e.preventDefault()
        if (signupData?.password !== confPassword?.confPassword) {
            toast.error("Password Didn't Matched", {
                autoClose: 3500,
            })
        } else {
            dispatch(signupReq({ signupData, toast, navigate }))
        }
    }


    return (
        <>
            <section id="Get-in-Touch">
                <div className="container text-center position-absolute" style={{ "marginTop": "100px" }}>
                    <div className="Get-in-Touch-box card card-3">
                        <h3 className="d-flex justify-content-center">SIGN UP</h3>
                        <div className="row d-flex justify-content-center">
                            <div className="vertical-space-5"></div>
                            <div className="vertical-space-40"></div>
                            <form onSubmit={handleSubmit}>
                                <div className="row" style={{ "marginLeft": "100px" }}>

                                    {/* Full Name */}
                                    <div className=" col-md-10">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Full name"
                                                name='full_name'
                                                value={signupData?.full_name}
                                                onChange={handleChange}
                                                pattern='^[a-zA-Z ]+$'
                                                title="Accept Alphabets & Whitespaces Only"
                                                required
                                            />
                                            <span className="fa fa-user icone "></span>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className=" col-md-5">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email address"
                                                name='email'
                                                value={signupData?.email}
                                                onChange={handleChange}
                                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,}$"
                                                title="Accept Email Format Only"
                                                required
                                            />
                                            <span className="fa fa-envelope icone "></span>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className=" col-md-5">
                                        <div className="form-group">
                                            <input
                                                type="tel"
                                                className="form-control"
                                                placeholder="Phone number"
                                                name='phone'
                                                value={signupData?.phone}
                                                onChange={handleChange}
                                                pattern="[0-9]{10}"
                                                title="Accept Phone Number Only"
                                                maxLength={10}
                                                required
                                            />
                                            <span className="fa fa-phone icone "></span>
                                        </div>
                                    </div>

                                    {/* Password */}
                                    <div className=" col-md-5">
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Password"
                                                name='password'
                                                value={signupData?.password}
                                                onChange={handleChange}
                                                pattern='[a-zA-Z0-9]{8,16}$'
                                                title="Password Should Be Alphanumeric Without Space"
                                                required
                                            />
                                            <span className="fa fa-lock icone "></span>
                                        </div>
                                    </div>

                                    {/* Confirm Password */}
                                    <div className=" col-md-5">
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Confirm Password"
                                                name='confPassword'
                                                value={confPassword?.confPassword}
                                                onChange={(e) => setConfPassword({ ...confPassword, [e.target.name]: e.target.value })}
                                                required
                                            />
                                            <span className="fa fa-key icone "></span>
                                        </div>
                                    </div>
                                </div>

                                {/* SignUp Button */}
                                <button type="submit" className="btn btn-outline-primary" style={{ "width": "120px" }}><i className="fa-solid fa-address-card mx-1"></i>Sign Up</button>
                                <Link to="/" type="reset" className="button button-rounded"><i className="fa-solid fa-house mt-3 text-secondary"></i></Link>
                            </form>
                        </div>
                        <div className="vertical-space-40"></div>
                        <div className='ml-5'>
                            <Link className='text-dark' to="/login"><h5>Already Have an Account?<span className='text-primary'>&nbsp;Login</span></h5></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp