import React from 'react'
import { Link } from 'react-router-dom'

const TopNavbar = () => {
    return (
        <>
            <div className="top_bar background-color-orange">
                <div className="top_bar_container">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="top_bar_content d-flex flex-row align-items-center justify-content-start">
                                    <ul className="top_bar_contact_list">
                                        <li>
                                            <i className="fa fa-phone coll" aria-hidden="true"></i>
                                            <div className="contact-no">+919876543210</div>
                                        </li>
                                        <li>
                                            <i className="fa fa-envelope coll" aria-hidden="true"></i>
                                            <div className="email"><Link
                                                to="https://demo.technosarjan.com/cdn-cgi/l/email-protection"
                                                className="__cf_email__ text-white"
                                                data-cfemail="c3a6bba2aeb3afa683a9aca1b7a6ada7eda0acae">email@example.com</Link>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className=" ml-auto ">
                                        <div className="hamburger menu_mm  search_button transparent search display"><i
                                            className="large material-icons font-color-white  search-icone  menu_mm ">menu</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNavbar