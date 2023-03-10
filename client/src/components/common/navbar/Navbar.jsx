import React from 'react'
import { Link } from 'react-router-dom'
import MenuNav from './MenuNav'
import TopNavbar from './TopNavbar'

const Navbar = () => {
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
                                            <li className="dropdown active ">
                                                <Link className="dropdown-toggle" data-toggle="dropdown" to="#">Home
                                                    <span className="caret"></span></Link>
                                                <ul className="dropdown-menu">
                                                    <li><Link to="index.html">Home variation 1</Link></li>
                                                    <li><Link to="index2.html">Home variation 2</Link></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown ">
                                                <Link className="dropdown-toggle" data-toggle="dropdown" href="#">Job
                                                    <span className="caret"></span></Link>
                                                <ul className="dropdown-menu">
                                                    <li><Link to="job_category.html">Job List</Link></li>
                                                    <li><Link to="job_detail.html">Job Detail</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="blog_page.html"> Blog</Link></li>
                                            <li><Link to="about_us.html">About</Link></li>
                                            <li><Link to="contact.html">Contact</Link></li>
                                        </ul>
                                        <div className=" Post-Jobs">
                                            <Link to="post_job.html" className="">
                                                Post Jobs
                                            </Link>
                                        </div>
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