import React from 'react'
import { Link } from 'react-router-dom'

const Category = ({ category_data }) => {
    
    console.log(category_data);
    
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
                        {
                            category_data?.map(item => {
                                return (
                                    <div className="col-lg-3 col-md-6 max-width-50" key={item?._id}>
                                        <div className="box background-color-white-light">
                                            <div className="circle">
                                                <img src={`./assets/imags/icone/${item?.category_logo}`} alt="" />
                                            </div>
                                            <h6>{item?.category_name}</h6>
                                            <Link to="#!" className="button job_post" data-hover="View Jobs" data-active="I'M ACTIVE"><span>36 Job
                                                Posts</span></Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="vertical-space-85"></div>
            </section>
        </>
    )
}

export default Category