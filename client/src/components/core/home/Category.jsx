import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
    return (
        <>
            <section id="Job-Category">
                <div className="container">
                    <h3 className="text-center">Choose Job Category</h3>
                    <div className="vertical-space-30"></div>
                    <p className="max-width">Lorem ipsum tempus amet conubia adipiscing fermentum viverra gravida, mollis
                        suspendisse pretium dictumst inceptos mattis euismod
                    </p>
                    <div className="vertical-space-60"> </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 max-width-50">
                            <div className="box background-color-white-light">
                                <div className="circle">
                                    <img src="./assets/imags/icone/service-icone-1.png" alt="" />
                                </div>
                                <h6>Education & Training</h6>
                                <Link to="#!" className="button job_post" data-hover="View Jobs" data-active="I'M ACTIVE"><span>36 Job
                                    Posts</span></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 max-width-50">
                            <div className="box background-color-white-light">
                                <div className="circle">
                                    <img src="./assets/imags/icone/service-icone-2.png" alt="" />
                                </div>
                                <h6>Sales and Marketing</h6>
                                <Link to="#!" className="button job_post" data-hover="View Jobs" data-active="I'M ACTIVE"><span>72 Job
                                    Posts</span></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 max-width-50">
                            <div className="box background-color-white-light">
                                <div className="circle">
                                    <img src="./assets/imags/icone/service-icone-3.png" alt="" />
                                </div>
                                <h6>Computer Programing</h6>
                                <Link to="#!" className="button job_post" data-hover="View Jobs" data-active="I'M ACTIVE"><span>42 Job
                                    Posts</span></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 max-width-50">
                            <div className="box background-color-white-light">
                                <div className="circle">
                                    <img src="./assets/imags/icone/service-icone-4.png" alt="" />
                                </div>
                                <h6>Customer Support</h6>
                                <Link to="#!" className="button job_post" data-hover="View Jobs" data-active="I'M ACTIVE"><span>18 Job
                                    Posts</span></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 max-width-50">
                            <div className="box background-color-white-light">
                                <div className="circle">
                                    <img src="./assets/imags/icone/service-icone-5.png" alt="" />
                                </div>
                                <h6>Design & Multimedia</h6>
                                <Link to="#!" className="button job_post" data-hover="View Jobs" data-active="I'M ACTIVE"><span>48 Job
                                    Posts</span></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 max-width-50">
                            <div className="box background-color-white-light">
                                <div className="circle">
                                    <img src="./assets/imags/icone/service-icone-6.png" alt="" />
                                </div>
                                <h6>Web Development</h6>
                                <Link to="#!" className="button job_post" data-hover="View Jobs" data-active="I'M ACTIVE"><span>94 Job
                                    Posts</span></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 max-width-50 margin-left-18">
                            <div className="box background-color-white-light">
                                <div className="circle">
                                    <img src="./assets/imags/icone/service-icone-7.png" alt="" />
                                </div>
                                <h6>Medical/Pharma</h6>
                                <Link to="#!" className="button job_post" data-hover="View Jobs" data-active="I'M ACTIVE"><span>64 Job
                                    Posts</span></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 max-width-50">
                            <div className="box background-color-white-light ">
                                <div className="circle">
                                    <img src="./assets/imags/icone/service-icone-8.png" alt="" />
                                </div>
                                <h6>Engineer/Architects</h6>
                                <Link to="#!" className="button job_post" data-hover="View Jobs" data-active="I'M ACTIVE"><span>52 Job
                                    Posts</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vertical-space-85"></div>
            </section>
        </>
    )
}

export default Category