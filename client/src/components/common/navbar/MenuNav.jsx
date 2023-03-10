import React from 'react'
import { Link } from 'react-router-dom'

const MenuNav = () => {
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
                        <li className="dropdown menu_mm">
                            <Link className="dropdown-toggle" data-toggle="dropdown" to="#">Home
                                <span className="caret"></span></Link>
                            <ul className="dropdown-menu">
                                <li><Link to="index.html">Home 1</Link></li>
                                <li><Link to="index2.html">Home 2</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown menu_mm">
                            <Link className="dropdown-toggle menu_mm" data-toggle="dropdown" to="#">Job
                                <span className="caret"></span></Link>
                            <ul className="dropdown-menu menu_mm">
                                <li className="menu_mm"><Link to="job_category.html">Job List</Link></li>
                                <li className="menu_mm"><Link to="job_detail.html">Job Detail</Link></li>
                            </ul>
                        </li>
                        <li className="menu_mm"><Link to="blog_page.html">Blog</Link></li>
                        <li className="menu_mm"><Link to="about_us.html">About</Link></li>
                        <li className="menu_mm"><Link to="contact.html">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default MenuNav