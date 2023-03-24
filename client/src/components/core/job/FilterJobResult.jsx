import React from 'react'

const FilterJobResult = () => {
    return (
        <>
            <div className="col-lg-4 col-md-12">
                <div className="Job-Category-box">
                    <p className="title">Job Category</p>
                    <ul>
                        <li><input className='mx-2' type="checkbox" />Web Developer (54)</li>
                        <br />
                        <li><input className='mx-2' type="checkbox" />User Experience Design (21)</li>
                        <br />
                        <li><input className='mx-2' type="checkbox" />Digital Marketer (72)</li>
                        <br />
                        <li><input className='mx-2' type="checkbox" />Branding and promotion (54)</li>
                        <br />
                        <li><input className='mx-2' type="checkbox" />User Experience Design (21)</li>
                        <br />
                        <li><input className='mx-2' type="checkbox" />Digital Marketer (72)</li>
                    </ul>
                </div>
                <div className="Job-Nature-box">
                    <p className="title">Job Nature</p>
                    <ul>
                        <li><input className='mx-2' type="checkbox" />Full Time jobs</li>
                        <br />
                        <li><input className='mx-2' type="checkbox" />Part Time jobs</li>
                        <br />
                        <li><input className='mx-2' type="checkbox" />Hourly</li>
                    </ul>
                </div>
                <div className="Salary-Range-box">

                    {/* Salary Range< */}
                    {/*<p className="title">Salary Range</p>
                    <p>
                        <input type="text" id="amount1" className="salery-range" /> <i className="fa fa-minus minus"></i>
                        <input type="text" id="amount2" className="salery-range" />
                    </p>
                     <div id="slider-range"></div> */}

                    <p className="small-title">Experience Level</p>
                    <form action="#" className="search-box_search_form">
                        <select className="dropdown_item_select search-box_search_input">
                            <option>Select experience level</option>
                            <option>Select experience level1</option>
                            <option>Select experience level2</option>
                        </select>
                        <p className="small-title">Location</p>
                        <input className="search-box_search_input Location " placeholder="Location" required="required"
                            type="search" />
                        <span className="fa fa-map-marker location-icone"></span>
                    </form>
                </div>
                <div className="Industry-box">
                    <p className="title">Industry</p>
                    <ul>
                        <li><input className='mx-2' type="checkbox" />Full Time jobs</li>
                        <br />
                        <li><input className='mx-2' type="checkbox" />Part Time jobs</li>
                        <br />
                        <li><input className='mx-2' type="checkbox" />Hourly</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default FilterJobResult