import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { doLogOut } from '../../../services/slice/AuthSlice'

const MenuNav = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = JSON.parse(window.localStorage.getItem("user"))
    const token = JSON.parse(window.localStorage.getItem("token"))

    // logOut func
    const logOut = () => {
        dispatch(doLogOut())
        navigate('/')
    }

    return (
        <>
            <div className="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">
                <div className="menu_close_container">
                    <div className="menu_close">
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="search">
                    <form action="#" className="header_search_form menu_mm">
                        <input type="search" className="search_input menu_mm" placeholder="Search" required="required" />
                        <button
                            className="header_search_button d-flex flex-column align-items-center justify-content-center menu_mm">
                            <i className="fa fa-search menu_mm" aria-hidden="true"></i>
                        </button>
                    </form>
                </div>
                <nav className="menu_nav">
                    <ul className="menu_mm">
                        <li className="menu_mm"><Link to="/">Home</Link></li>
                        <li className="menu_mm"><Link to="/jobs">Job</Link></li>
                        <li className="menu_mm"><Link to="/blogs">Blog</Link></li>
                        <li className="menu_mm"><Link to="/aboutus">About</Link></li>
                        <li className="menu_mm"><Link to="/contactus">Contact</Link></li>

                        {/* User Dropdown menu */}
                        {
                            token ?
                                <li className="dropdown">
                                    <Link to="#!" className="dropdown-toggle" data-toggle="dropdown">
                                        {
                                            user?.displayName ?
                                                user?.displayName
                                                :
                                                user?.full_name
                                        }
                                        <span className="caret"></span></Link>
                                    <ul className="dropdown-menu">
                                        <li className='ml-4'>
                                            <Link to="/" onClick={logOut}>Log Out</Link>
                                        </li>
                                    </ul>
                                </li>
                                : null
                        }
                        {/* Signup */}
                        {
                            !token ? <li><Link to="/signup">Sign Up</Link></li> : null
                        }
                        {/* Login */}
                        {
                            !token ? <li><Link to="/login">Log In</Link></li> : null
                        }
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default MenuNav