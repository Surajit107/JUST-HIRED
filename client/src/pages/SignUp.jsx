import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const SignUp = () => {
    const [signupData, setSignupData] = useState({
        full_name: "",
        email: "",
        password: ""
    })
    const [confPassword, setConfPassword] = useState({ confPassword: "" })
    const navigate = useNavigate()


    // handleChance function
    const handleChange = (e) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value })
    }

    // handleSubmit function
    const handleSubmit = (e) => {
        e.preventDefault()
        if (signupData?.password !== confPassword?.confPassword) {
            toast.error("Password Didn't Matched")
        } else {
            toast.success("Registered Successfully.Please Login To Continue")
            navigate('/login')
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
                                    <div className=" col-md-10">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Full name"
                                                name='full_name'
                                                value={signupData?.full_name}
                                                onChange={handleChange}
                                                required
                                            />
                                            <span className="fa fa-user icone "></span>
                                        </div>
                                    </div>
                                    <div className=" col-md-10">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email address"
                                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                                title="Accept Email Format Only"
                                                name='email'
                                                value={signupData?.email}
                                                onChange={handleChange}
                                                required
                                            />
                                            <span className="fa fa-envelope icone "></span>
                                        </div>
                                    </div>
                                    <div className=" col-md-5">
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Password"
                                                name='password'
                                                value={signupData?.password}
                                                onChange={handleChange}
                                                required
                                            />
                                            <span className="fa fa-lock icone "></span>
                                        </div>
                                    </div>
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