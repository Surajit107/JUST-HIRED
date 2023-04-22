import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ApplyNowForm = () => {
    const user = JSON.parse(window.localStorage.getItem("user"))
    const { full_name, email, phone } = user
    const initialState = {
        first_name: full_name?.split(" ")[0],
        last_name: full_name?.split(" ")[1],
        email: email,
        phone: phone,
        address_one: "",
        address_two: "",
        photo: "",
        cv: ""
    }
    const [formValues, setFormValues] = useState(initialState)
    const [isChecked, setIsChecked] = useState(false)

    // handleChange function
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    // handleSubmit function
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <section id="post_job">
                <div className="vertical-space-100"></div>
                <div className="vertical-space-101"></div>
                <div className="container">
                    <div className="list-box" style={{ width: "210px" }}>
                        <Link to="/jobs" className="font-color-black margin-right">Job </Link><Link to="#" className="font-color-orange margin-left">Apply Here</Link>
                    </div>
                    <div className="vertical-space-60"></div>
                    <div className="job-post-box">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputJobtitle">First Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputJobtitle"
                                            name='first_name'
                                            onChange={handleChange}
                                            value={formValues?.first_name}
                                            placeholder="Enter Your First name"
                                            required />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputJobtitle">Last Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputJobtitle"
                                            name='last_name'
                                            onChange={handleChange}
                                            value={formValues?.last_name}
                                            placeholder="Enter Your Last name"
                                            required />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputCompany">Email ID</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputCompany"
                                            name='email'
                                            onChange={handleChange}
                                            value={formValues?.email}
                                            placeholder="Enter Your Email ID"
                                            required />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputLoction">Phone Number</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputLoction"
                                            name='phone'
                                            onChange={handleChange}
                                            value={formValues?.phone}
                                            placeholder="Enter Your Phone Number"
                                            required />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputLoction">Address Line 1</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputLoction"
                                            name="address_one"
                                            onChange={handleChange}
                                            value={formValues?.address_one}
                                            placeholder="Address Line 1"
                                            required />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputLoction">Address Line 2</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputLoction"
                                            name="address_two"
                                            onChange={handleChange}
                                            value={formValues?.address_two}
                                            placeholder="Address Line 2" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group ">
                                        <label>Upload Your Passpoart Size Photo</label>
                                        <div className="box text-center">
                                            <input
                                                type="file"
                                                name="photo"
                                                id="file-5"
                                                className="inputfile inputfile-4"
                                                onChange={handleChange}
                                                value={formValues?.photo}
                                                data-multiple-caption="{count} files selected" multiple />
                                            <label htmlFor="file-5">
                                                <i>
                                                    <img src="imags/job-post.png" className="imtges" alt="" />
                                                </i>
                                                <span>Drop your file here, or <i className="font-color-orange">Browse</i></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <label>Upload Your Updated CV</label>
                                        <div className="box text-center">
                                            <input
                                                type="file"
                                                name="cv"
                                                id="file-7"
                                                className="inputfile1 inputfile-4"
                                                onChange={handleChange}
                                                value={formValues?.cv}
                                                data-multiple-caption="{count} files selected"
                                                multiple />
                                            <label htmlFor="file-7">
                                                <i>
                                                    <img src="imags/job-post.png" className="imtges" alt="" />
                                                </i>
                                                <span>Drop your file here, or <i className="font-color-orange">Browse</i></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Agree with term and conditions</label>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input "
                                        id="exampleCheck1"
                                        name='check'
                                        checked={isChecked}
                                        onChange={(e) => setIsChecked(e.target.checked)}
                                        required />
                                    <label className="form-check-label text-left" htmlFor="exampleCheck1">
                                        You understand that submitting an application does not guarantee employment with the company. You agree that all information submitted on your application is true and accurate to the best of your knowledge.
                                    </label>
                                </div>
                            </div>
                            {
                                isChecked ?
                                    <button type="submit" className="btn Post-Job-Offer">Apply</button>
                                    :
                                    <button type="submit" className="btn disable-Post-Job-Offer" disabled>Apply</button>
                            }
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ApplyNowForm