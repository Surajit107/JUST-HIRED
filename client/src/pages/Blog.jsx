import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import Pagination from '../components/common/Pagination'

const Blog = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <section id="Blog">
                <div className="vertical-space-100"> </div>
                <div className="vertical-space-101"> </div>
                <div className="container">
                    <h3>Our Latest Blog Posts</h3>
                    <div className="vertical-space-20"></div>
                    <p>Lorem ipsum tempus amet conubia adipiscing fermentum viverra gravida sodales luctus nulla</p>
                    <div className="vertical-space-50"></div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <img src="./assets/imags/blog1.jpg" className="blog-image" alt="" />
                            <div className="blog-box">
                                <Link to="/blogdetails" className="font-color-black font-size">Page builder included</Link>
                                <p className="float-left font-color-black width"><Link to="#!" className="font-color-black font-size-14">27
                                    Mar, 2018</Link> | <Link to="#!" className="font-color-black font-size-14">11 min read</Link></p>
                                <p className="space10">Fusce aliqm nonlips dictmst dapib alorem accman pellenl tesque in temor aliqm
                                    npion dmst dapib honcs fusce aliqm non dictmst . </p>
                                <div className="vertical-space-20"></div>
                                <Link to="/blogdetails" className="font-color-orange font-bold">Read more<i className="fa fa-long-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <img src="./assets/imags/blog2.jpg" className="blog-image" alt="" />
                            <div className="blog-box">
                                <Link to="/blogdetails" className="font-color-black font-size">Retina ready graphics</Link>
                                <p className="float-left font-color-black width"><Link to="#!" className="font-color-black font-size-14">27
                                    Mar, 2018</Link> | <Link to="#!" className="font-color-black font-size-14">11 min read</Link></p>
                                <p className="space10">Fusce aliqm nonlips dictmst dapib alorem accman pellenl tesque in temor aliqm
                                    npion dmst dapib honcs fusce aliqm non dictmst . </p>
                                <div className="vertical-space-20"></div>
                                <Link to="/blogdetails" className="font-color-orange font-bold">Read more<i className="fa fa-long-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <img src="./assets/imags/blog3.jpg" className="blog-image" alt="" />
                            <div className="blog-box">
                                <Link to="/blogdetails" className="font-color-black font-size">Simple blog post</Link>
                                <p className="float-left font-color-black width"><Link to="#!" className="font-color-black font-size-14">27
                                    Mar, 2018</Link> | <Link to="#!" className="font-color-black font-size-14">11 min read</Link></p>
                                <p className="space10">Fusce aliqm nonlips dictmst dapib alorem accman pellenl tesque in temor aliqm
                                    npion dmst dapib honcs fusce aliqm non dictmst . </p>
                                <div className="vertical-space-20"></div>
                                <Link to="/blogdetails" className="font-color-orange font-bold">Read more<i className="fa fa-long-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <img src="./assets/imags/blog4.jpg" className="blog-image" alt="" />
                            <div className="blog-box">
                                <Link to="/blogdetails" className="font-color-black font-size">Cookie cotton candy</Link>
                                <p className="float-left font-color-black width"><Link to="#!" className="font-color-black font-size-14">27
                                    Mar, 2018</Link> | <Link to="#!" className="font-color-black font-size-14">11 min read</Link></p>
                                <p className="space10">Fusce aliqm nonlips dictmst dapib alorem accman pellenl tesque in temor aliqm
                                    npion dmst dapib honcs fusce aliqm non dictmst . </p>
                                <div className="vertical-space-20"></div>
                                <Link to="/blogdetails" className="font-color-orange font-bold">Read more<i className="fa fa-long-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <img src="./assets/imags/blog5.jpg" className="blog-image" alt="" />
                            <div className="blog-box">
                                <Link to="/blogdetails" className="font-color-black font-size">Award-winning design</Link>
                                <p className="float-left font-color-black width"><Link to="#!" className="font-color-black font-size-14">27
                                    Mar, 2018</Link> | <Link to="#!" className="font-color-black font-size-14">11 min read</Link></p>
                                <p className="space10">Fusce aliqm nonlips dictmst dapib alorem accman pellenl tesque in temor aliqm
                                    npion dmst dapib honcs fusce aliqm non dictmst . </p>
                                <div className="vertical-space-20"></div>
                                <Link to="/blogdetails" className="font-color-orange font-bold">Read more<i className="fa fa-long-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <img src="./assets/imags/blog6.jpg" className="blog-image" alt="" />
                            <div className="blog-box">
                                <Link to="/blogdetails" className="font-color-black font-size">Mobile friendly</Link>
                                <p className="float-left font-color-black width"><Link to="#!" className="font-color-black font-size-14">27
                                    Mar, 2018</Link> | <Link to="#!" className="font-color-black font-size-14">11 min read</Link></p>
                                <p className="space10">Fusce aliqm nonlips dictmst dapib alorem accman pellenl tesque in temor aliqm
                                    npion dmst dapib honcs fusce aliqm non dictmst . </p>
                                <div className="vertical-space-20"></div>
                                <Link to="/blogdetails" className="font-color-orange font-bold">Read more<i className="fa fa-long-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="vertical-space-25"></div>

                        {/* Pagination */}
                        {/* <Pagination /> */}

                    </div>
                </div>
                <div className="vertical-space-60"> </div>
            </section>
        </>
    )
}

export default Blog