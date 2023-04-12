import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const JobDetails = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            {/* Banner section */}
            <section id="intro">
                <div className="carousel-item active">
                    <div className="carousel-background"><img src="./assets/imags/slider/banner2.jpg" alt="" /></div>
                    <div className="carousel-container">
                        <div className="carousel-content">
                            <h2 className="font-color-white">Job Result</h2>
                            <p className="font-color-white width-100"><Link to="index.html" className="font-color-white">Home /</Link><a
                                href="Job_Category-2.html" className="font-color-white"> Job </a>/ Details
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section id="job-Details">
                <div className="container background-color-full-white job-Details">
                    <div className="Exclusive-Product">
                        <h3>Exclusive Product Manager Needed</h3>
                        <Link to="#" className="Apply-Now">Apply Now</Link>
                        <h6 className="font-color-orange">Airbnx Expross Soft</h6>
                        <i className="material-icons">place</i>
                        <span className="text">11907 Doyle Cape Cydneyview</span>
                        <h4>Short description</h4>
                        <p>Porttitor amet condimentum non fringilla nostra scelerisque suscipit torquent sem tempor hac rutrum
                            posuere etiam, in risus a aenean nibh dapibus quis litora lobortis torquent ligula torquent commodo
                            pretium massa gravida senectus donec scelerisque cursus sit, sapien quam eros euismod volutpat
                            commodo convallis interdum, habitant leo himenaeos dictumst lorem taciti quisque.</p>
                    </div>
                    <img src="./assets/imags/job-detail.jpg" alt="" className="job-detail-img" />
                    <div className="Job-Description">
                        <h4>Job Description / Responsibility</h4>
                        <ul>
                            <li className="list-style">Et vestibulum ullamcorper curae tellus consectetur erat pharetra et cubilia
                                Nibh est auctor lacus nam lacinia aptent</li>
                            <li className="list-style">
                                Vitae sociosqu a nisi cubilia vulputate aliquam vulputate imperdiet tempor arcu fames</li>
                            <li className="list-style">
                                Odio habitasse senectus morbi dapibus mauris non primis, nisl ante hendrerit consectetur nulla
                                phasellus eleifend, ad at scelerisque vulputate habitant tempor</li>
                            <li className="list-style">
                                Dictum tortor praesent aliquam lectus est vestibulum, viverra arcu fringilla lectus luctus proin
                                conubia, et porta pellentesque donec mollisEt vestibulum ullamcorper curae tellus consectetur
                                erat pharetra et cubilia</li>
                            <li className="list-style">
                                Vitae sociosqu a nisi cubilia vulputate aliquam vulputate imperdiet tempor arcu fames</li>
                            <li className="list-style">
                                Odio habitasse senectus morbi dapibus mauris non primis, nisl ante hendrerit consectetur nulla
                                phasellus eleifend, ad at scelerisque vulputate habitant tempor</li>
                            <li className="list-style">
                                Dictum tortor praesent aliquam lectus est vestibulum, viverra arcu fringilla lectus luctus proin
                                conubia</li>
                        </ul>
                        <div className="vertical-space-20"></div>
                        <h4>Experience & Requirement</h4>
                        <p className="margin-bottom">Suspendisse augue pulvinar placerat himenaeos odio nec turpis augue sem
                            maecenas, faucibus erat lacinia consectetur sapien suscipit vestibulum venenatis himenaeos elit
                            etiam lobortis luctus tempor phasellus vitae aliquam aenean tincidunt suscipit rhoncus mauris,
                            lectus duis aenean fermentum aptent laoreet habitant suspendisse donec malesuada lectus quisque
                            primis tristique donec mattis, per euismod quisque urna proin ornare, convallis litora curae
                            dictumst.</p>
                        <ul>
                            <li className="list-style">Et vestibulum ullamcorper curae tellus consectetur erat pharetra et cubilia
                                Nibh est auctor lacus nam lacinia aptent</li>
                            <li className="list-style">
                                Et vestibulum ullamcorper curae tellus consectetur erat pharetra et cubilia Nibh est auctor
                                lacus nam lacinia aptent</li>
                            <li className="list-style">
                                Vitae sociosqu a nisi cubilia vulputate aliquam vulputate imperdiet tempor arcu fames</li>
                            <li className="list-style">
                                Odio habitasse senectus morbi dapibus mauris non primis, nisl ante hendrerit consectetur nulla
                                phasellus eleifend, ad at scelerisque vulputate habitant temmollis</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="comment" className="background-color-full-white-light">
                <div className="container">
                    <div className="max-width-80">
                        <h4>comment</h4>
                        <Link to="#" className="Share">Share</Link>
                        <div className="media border p-3">
                            <img src="./assets/imags/comment1.png" alt="John Doe" className="mr-3 rounded-circle imagess"
                                style={{ "width": "60px" }} />
                            <div className="media-body">
                                <h6>Rehmatun Nisal</h6>
                                <p>Suspendisse augue pulvinar placerat himenaeos odio nec turpis augue sem maecenas, faucibus
                                    erat lacinia consectetur sapien suscipit vestibulum venenatis himenaeos.</p>
                            </div>
                        </div>
                        <div className="media border p-3 ">
                            <img src="./assets/imags/comment2.png" alt="John Doe" className="mr-3 rounded-circle imagess"
                                style={{ "width": "60px" }} />
                            <div className="media-body">
                                <h6>Rehmatun Nisal</h6>
                                <p>Suspendisse augue pulvinar placerat himenaeos odio nec turpis augue sem maecenas, faucibus
                                    erat lacinia consectetur sapien suscipit vestibulum venenatis himenaeos.</p>
                            </div>
                        </div>
                        <div className="media border p-3 padding-none border-none">
                            <img src="./assets/imags/comment3.png" alt="John Doe" className="mr-3 rounded-circle imagess"
                                style={{ "width": "60px" }} />
                            <div className="media-body">
                                <form>
                                    <textarea placeholder="Type commeny" required></textarea>
                                    <button className="Post">Post</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default JobDetails