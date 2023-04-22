import React from 'react'
import { Link } from 'react-router-dom'
import ChildJobList from '../../common/joblist/ChildJobList'
import Pagination from '../../common/Pagination'

const RecentJob = () => {
    return (
        <>
            <section id="resent-job-post" className="background-color-white">
                <div className="vertical-space-85"></div>
                <div className="container text-center">
                    <h3 className="text-center">Recent Job Post</h3>
                    <div className="vertical-space-30"></div>
                    <p className="max-width">Lorem ipsum tempus amet conubia adipiscing fermentum viverra gravida, mollis
                        suspendisse pretium dictumst inceptos mattis euismod
                    </p>
                    <div className="vertical-space-60"></div>
                    {/* single job card for mapping */}
                    <ChildJobList />

                    <div className="detail">
                        <div className="media display-inline text-align-center">
                            <img src="./assets/imags/job-post-icone-2.png" alt="John Doe" className="mr-3 " />
                            <div className="media-body text-left text-align-center">
                                <h6>Rokital needs Marketing Experts</h6>
                                <i className="large material-icons">account_balance</i>
                                <span className="text">Rokitar ltd.</span>
                                <br />
                                <i className="large material-icons">place</i>
                                <span className="text font-size">11907 Doyle Cape Cydneyview</span>
                                <div className="float-right margin-top text-align-center">
                                    <Link to="/jobdetails" className="part-full-time">Full Time</Link>
                                    <p className="date-time">Deadline: May 23, 2018</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="detail">
                        <div className="media display-inline text-align-center">
                            <img src="./assets/imags/job-post-icone-3.png" alt="John Doe" className="mr-3 " />
                            <div className="media-body text-left text-align-center">
                                <h6>Mshape looking for a senior UX Designer</h6>
                                <i className="large material-icons">account_balance</i>
                                <span className="text">Mshape inc.</span>
                                <br />
                                <i className="large material-icons">place</i>
                                <span className="text font-size">11907 Doyle Cape Cydneyview</span>
                                <div className="float-right margin-top text-align-center">
                                    <Link to="/jobdetails" className="part-full-time">Full Time</Link>
                                    <p className="date-time">Deadline: May 23, 2018</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="detail">
                        <div className="media display-inline text-align-center">
                            <img src="./assets/imags/job-post-icone-4.png" alt="John Doe" className="mr-3 " />
                            <div className="media-body text-left text-align-center">
                                <h6>Marketing Directer needed</h6>
                                <i className="large material-icons">account_balance</i>
                                <span className="text">Scalegoss ltd.</span>
                                <br />
                                <i className="large material-icons">place</i>
                                <span className="text font-size">11907 Doyle Cape Cydneyview</span>
                                <div className="float-right margin-top text-align-center">
                                    <Link to="/jobdetails" className="part-full-time">Part Time</Link>
                                    <p className="date-time">Deadline: May 23, 2018</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="detail">
                        <div className="media display-inline text-align-center">
                            <img src="./assets/imags/job-post-icone-5.png" alt="John Doe" className="mr-3 " />
                            <div className="media-body text-left text-align-center">
                                <h6>We need a senior Brand Designer</h6>
                                <i className="large material-icons">account_balance</i>
                                <span className="text">Supwin inc.</span>
                                <br />
                                <i className="large material-icons">place</i>
                                <span className="text font-size">11907 Doyle Cape Cydneyview</span>
                                <div className="float-right margin-top text-align-center">
                                    <Link to="/jobdetails" className="part-full-time">Freelance</Link>
                                    <p className="date-time">Deadline: May 23, 2018</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pagination */}
                    <Pagination />

                </div>
                <div className="vertical-space-60"></div>
            </section>
        </>
    )
}

export default RecentJob