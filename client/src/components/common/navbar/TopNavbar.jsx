import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const TopNavbar = () => {
    const [toggle, setToggle] = useState(true)

    // Language translation function
    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
            {
                pageLanguage: "en",
                autoDisplay: false
            },
            "google_translate_element"
        );
    };


    useEffect(() => {
        var addScript = document.createElement("script");
        addScript.setAttribute(
            "src",
            "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        );
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
    }, []);


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

                                        {/* Language Filter */}
                                        <li style={{ "display": !toggle ? "inline-block" : "none" }}>
                                            <div id="google_translate_element"></div>
                                        </li>
                                        <li style={{ display: toggle ? "inline" : "none" }}>
                                            <Link onClick={() => setToggle(false)} to="#!">
                                                <i className="fa-solid fa-language" style={{ color: "#ffffff", fontSize: "18px" }}></i>
                                            </Link>
                                        </li>
                                        <li style={{ "display": toggle ? "none" : "inline" }}>
                                            <Link onClick={() => setToggle(true)} to="#!">
                                                <i className="fa-solid fa-xmark" style={{ color: "#ffffff", fontSize: "18px" }}></i>
                                            </Link>
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