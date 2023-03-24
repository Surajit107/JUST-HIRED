import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <>
            <section id="Get-in-Touch">
                <div className="container text-center position-absolute" style={{ "marginTop": "100px" }}>
                    <div className="Get-in-Touch-box">
                        <h3 className="d-flex justify-content-center">SIGN UP</h3>
                        <div className="row d-flex justify-content-center">
                            <div className="vertical-space-5"></div>
                            <div className="vertical-space-40"></div>
                            <form>
                                <div className="row" style={{ "marginLeft": "100px" }}>
                                    <div className=" col-md-10">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Full name"
                                                required />
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
                                                required
                                            />
                                            <span className="fa fa-key icone "></span>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-outline-primary" style={{ "width": "120px", "marginLeft": "50px" }}><i className="fa-solid fa-address-card mx-1"></i>Sign Up</button>
                                <Link to="/" type="reset" className="button button-rounded"><i className="fa-solid fa-house mt-3 text-secondary"></i></Link>
                            </form>
                        </div>
                        <div className="vertical-space-40"></div>
                        <div className='ml-5'>
                            <h5>Already Have an Account? <span><Link to="/login">Login</Link></span></h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp