import React from 'react'
import { Link } from 'react-router-dom'

const LogIn = () => {
    return (
        <>
            <section id="Get-in-Touch">
                <div className="container text-center position-absolute" style={{ "marginTop": "100px" }}>
                    <div className="Get-in-Touch-box">
                        <h3 className="d-flex justify-content-center">Log In</h3>
                        <div className="row d-flex justify-content-center">
                            <div className="vertical-space-5"></div>
                            <div className="vertical-space-40"></div>
                            <form>
                                <div className="row" style={{ "marginLeft": "10px" }}>
                                    <div className=" col-md-12">
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
                                    <div className=" col-md-12">
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
                                </div>
                                <button type="submit" className="btn btn-outline-primary" style={{ "width": "120px", "marginLeft": "50px" }}><i className="fa-solid fa-arrow-right-to-bracket mx-1"></i>Log In</button>
                                <Link to="/" type="reset" className="button button-rounded"><i className="fa-solid fa-house mt-3 text-secondary"></i></Link>
                            </form>
                        </div>
                        <div className="vertical-space-40"></div>
                        <div className='ml-5'>
                            <h5>Don't Have an Account? <span><Link to="/signup">Register</Link></span></h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LogIn