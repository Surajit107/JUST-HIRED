import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginReq } from '../services/slice/AuthSlice'
import { auth, google } from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'

const LogIn = () => {
    const [loginData, setLogindata] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    const dispatch = useDispatch()


    // handleChance function
    const handleChange = (e) => {
        setLogindata({ ...loginData, [e.target.name]: e.target.value })
    }

    // handleSubmit function
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginReq({ loginData, toast, navigate }))
    }

    // socailLogin function
    const socialLogin = async (provider) => {
        const result = await signInWithPopup(auth, provider)
        window.localStorage.setItem("user", JSON.stringify(result?.user))
        window.localStorage.setItem("token", JSON.stringify(result?.user?.accessToken))
        navigate('/')
        toast.success('Loged In Successfully', {
            autoClose: 3500
        })
        // console.log(result);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>
            <section id="Get-in-Touch">
                <div className="container text-center position-absolute" style={{ "marginTop": "100px" }}>
                    <div className="Get-in-Touch-box card card-3">
                        <h3 className="d-flex justify-content-center">LOGIN</h3>
                        <div className="row d-flex justify-content-center">
                            <div className="vertical-space-5"></div>
                            <div className="vertical-space-40"></div>
                            <form onSubmit={handleSubmit}>
                                <div className="row" style={{ "marginLeft": "10px" }}>

                                    {/* Email */}
                                    <div className=" col-md-12">
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email address"
                                                name='email'
                                                value={loginData?.email}
                                                onChange={handleChange}
                                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                                title="Accept Email Format Only"
                                                required
                                            />
                                            <span className="fa fa-envelope icone "></span>
                                        </div>
                                    </div>

                                    {/* Password */}
                                    <div className=" col-md-12">
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="Password"
                                                name='password'
                                                value={loginData?.password}
                                                onChange={handleChange}
                                                pattern='^[a-zA-Z0-9]{8,16}$'
                                                title="Password Should Be Alphanumeric Without Space"
                                                required
                                            />
                                            <span className="fa fa-lock icone "></span>
                                        </div>
                                    </div>
                                </div>


                                {/* LogIn Button */}
                                <button type="submit" className="btn btn-outline-primary" style={{ "width": "120px", "marginLeft": "50px" }}><i className="fa-solid fa-arrow-right-to-bracket mx-1"></i>Log In</button>
                                <Link to="/" type="reset" className="button button-rounded"><i className="fa-solid fa-house mt-3 text-secondary"></i></Link>
                            </form>
                        </div>
                        <div className="vertical-space-20"></div>

                        {/* Register Page Redirection Link */}
                        <div className='ml-5'>
                            <Link className='text-dark' to="/signup"><h5>Don't Have Any Account?<span className='text-primary'>&nbsp;Register</span></h5></Link>
                        </div>

                        {/* Login With Google */}
                        <div className="vertical-space-10"></div>
                        <div style={{ "marginLeft": "65px" }}>
                            <h5 className='text-center' style={{ "fontSize": "16px" }}>Sign In With Google
                                <span>
                                    <button onClick={() => socialLogin(google)} className='btn rounded-circle bg-transparent'>
                                        <i className="fa-brands fa-google" style={{ "color": "#ff0000" }}></i>
                                    </button>
                                </span>
                            </h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LogIn