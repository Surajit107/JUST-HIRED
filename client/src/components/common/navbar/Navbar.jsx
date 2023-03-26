import React from 'react'
import { Link } from 'react-router-dom'
import MenuNav from './MenuNav'
import TopNavbar from './TopNavbar'
import { useDispatch } from 'react-redux'
import { doLogOut } from '../../../services/slice/AuthSlice'

const Navbar = () => {
    const dispatch = useDispatch()

    return (
        <>
            <header className="header">
                {/* Top navbar */}
                <TopNavbar />

                {/* Navbar */}
                <div className="header_container background-color-orange-light">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="header_content d-flex flex-row align-items-center justify-content-start">
                                    <div className="logo_container">
                                        <Link to="/">
                                            <img src="./assets/imags/logo.png" className="logo-text" alt="" />
                                        </Link>
                                    </div>
                                    <nav className="main_nav_contaner ml-auto">
                                        <ul className="main_nav">
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/aboutus">About</Link></li>
                                            <li><Link to="/jobs">Job</Link></li>
                                            <li><Link to="/blogs"> Blog</Link></li>
                                            <li><Link to="/contactus">Contact</Link></li>

                                            {/* User Dropdown menu */}
                                            <li className="dropdown">
                                                <Link to="#!" className="dropdown-toggle" data-toggle="dropdown" href="#">User Name
                                                    <span className="caret"></span></Link>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <Link to="#!">Hi User Name</Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#!" onClick={() => dispatch(doLogOut())}>Log Out</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><Link to="/signup">Sign Up</Link></li>
                                            <li><Link to="/login">Log In</Link></li>
                                        </ul>
                                        <div className="hamburger menu_mm menu-vertical">
                                            <i className="large material-icons font-color-white menu_mm menu-vertical">menu</i>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MenuNav */}
                <MenuNav />
            </header>
        </>
    )
}

export default Navbar