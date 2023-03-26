import React from 'react'
import { Link } from 'react-router-dom'

const ChildJobList = () => {
    return (
        <>
            <div className="detail">
                <div className="media display-inline text-align-center">
                    <Link to="/jobdetails">
                        <img src="./assets/imags/job-post-icone-1.png" alt="John Doe" className="mr-3 " />
                    </Link>
                    <div className="media-body text-left  text-align-center">
                        <h6>Jopitar looking for a senior UX Designer</h6>
                        <i className="large material-icons">account_balance</i>
                        <span className="text">Jopitar inc.</span>
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
        </>
    )
}

export default ChildJobList