import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            {/* Banner section */}
            <section id="intro">
                <div className="carousel-item active">
                    <div className="carousel-background"><img src="./assets/imags/slider/banner1.jpg" alt="" /></div>
                    <div className="carousel-container">
                        <div className="carousel-content text-left">
                            <div className="container">
                                <h2 className="font-color-white">About Just-Hire</h2>
                                <p className="font-color-white margin">Lovistiq pue velit phasellus sed auctor leo eros luctus nibh
                                    fermentum, ad imperdiet rhoncus dolorhabitant purus velit aliquet dolorhabitant purus velit
                                    aliquet donecurna ut in turpis donecurna ut in turpis</p>
                                <Link to="#!" className="Explore-Jobs">Explore Jobs</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="Best-Place-to-Find-Jobs">
                <img src="./assets/imags/Best-Place-to-Find-Jobs.jpg" className="Best-Place-to-Find-Jobsimages" alt="" />
                <div className="Best-Place-to-Find-Jobs-image">
                    <div className="container ">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <h3 className="title">Best Place to Find Jobs</h3>
                                <div className="vertical-space-20"></div>
                                <p>The honcs fusce aliqm non dictmst dapib alorem accman pellenl tesque in temor ultrices etiams
                                    fusce aliqm non dictmst dapib alorem</p>
                                <div className="vertical-space-30"></div>
                                <div className="Title-text-here-one-box">
                                    <div className="media">
                                        <div className="mr-3 rounded-circle imges orange align-self-center">
                                            <img src="./assets/imags/Best-Place-to-Find-Jobs-icone1.png" alt="" className="" />
                                        </div>
                                        <div className="media-body">
                                            <h6>Mobile friendly</h6>
                                            <p>The honcs fusce aliqm non dictmst dapib alorem accman pellenl tesque in temor</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="vertical-space-20"></div>
                                <div className="Title-text-here-one-box">
                                    <div className="media">
                                        <div className="mr-3 rounded-circle imges blue align-self-center">
                                            <img src="./assets/imags/Best-Place-to-Find-Jobs-icone2.png" alt="" className="" />
                                        </div>
                                        <div className="media-body">
                                            <h6>Cookie cotton candy</h6>
                                            <p>The honcs fusce aliqm non dictmst dapib alorem accman pellenl tesque in temor</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="v2-Jobtend" className="v2-Jobtend-none-roted">
                <div className="container">
                    <div className="vertical-space-100"></div>
                    <div className="row">
                        <div className="col-lg-9 col-md-12 ">
                            <h3 className="title-jobted title font-color-white">Why Choose Jobtend</h3>
                            <div className="vertical-space-20"></div>
                            <p className="max-width font-color-white">Tristique velit phasellus sed auctor leo eros luctus nibh
                                fermentum, ad imperdiet rhoncus dolorhabitant purus velit aliquet donecurna ut in turpis
                            </p>
                            <div className="vertical-space-40"></div>
                            <ul className="max-width font-color-white">
                                <li className="list-item1 ">Tristique velit phasellus sed auctor leo eros luctus nibh fermentum, ad
                                    imperdiet rhoncus dolorhabitant purus velit aliquet donecurna ut in turpis
                                </li>
                                <li className="list-item1 ">Rivastic stique velit phasellus sed auctor leo eros luctus nibh
                                    fermentum, ad imperdiet rhoncus dolorhabitant purus </li>
                                <li className="list-item1 ">Lovistiq pue velit phasellus sed auctor leo eros luctus nibh fermentum,
                                    ad imperdiet rhoncus dolorhabitant purus velit aliquet dolorhabitant purus velit aliquet
                                    donecurna ut in turpis donecurna ut in turpis</li>
                                <li className="list-item1 ">Tristique velit phasellus sed auctor leo eros luctus nibh fermentum, ad
                                    imperdiet rhoncus dolorhabitant purus velit aliquet donecurna ut in turpis</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-12 align-self-center">
                            <Link to="#!" data-toggle="modal" data-target="#myModal" className="display-flex">
                                <span className="fa fa-play-circle font-color-white font-size-48"></span>
                                <h4 className="font-color-white title align-self-center">Watch Video</h4>
                            </Link>
                        </div>
                        <div className="vertical-space-100"></div>
                    </div>
                </div>
            </section>


            <section id="Meet-With-Our-Team">
                <div className="container">
                    <div className="vertical-space-100"></div>
                    <h3 className="text-center">Meet With Our Team</h3>
                    <div className="vertical-space-30"></div>
                    <p className="max-width">Lorem ipsum tempus amet conubia adipiscing fermentum viverra gravida, mollis
                        suspendisse pretium dictumst inceptos mattis euismod
                    </p>
                    <div className="vertical-space-60"></div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="Meet-With-Our-Team-box">
                                <div className="media">
                                    <img src="./assets/imags/Meet-With-Our-Team/Meet-With-Our-Team1.png" alt="" className="mr-3 rounded" />
                                    <div className="media-body align-self-center">
                                        <h6>Rehmatul Islam</h6>
                                        <p>UI/UX Designer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="Meet-With-Our-Team-box">
                                <div className="media">
                                    <img src="./assets/imags/Meet-With-Our-Team/Meet-With-Our-Team2.png" alt="" className="mr-3 rounded" />
                                    <div className="media-body align-self-center">
                                        <h6>Rohan Kapoor</h6>
                                        <p>CEO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="Meet-With-Our-Team-box">
                                <div className="media">
                                    <img src="./assets/imags/Meet-With-Our-Team/Meet-With-Our-Team3.png" alt="" className="mr-3 rounded" />
                                    <div className="media-body align-self-center">
                                        <h6>Rubi Islam</h6>
                                        <p>Senior Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="Meet-With-Our-Team-box">
                                <div className="media">
                                    <img src="./assets/imags/Meet-With-Our-Team/Meet-With-Our-Team4.png" alt="" className="mr-3 rounded" />
                                    <div className="media-body align-self-center">
                                        <h6> John Smith</h6>
                                        <p>Product Designer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="Meet-With-Our-Team-box">
                                <div className="media">
                                    <img src="./assets/imags/Meet-With-Our-Team/Meet-With-Our-Team5.png" alt="" className="mr-3 rounded" />
                                    <div className="media-body align-self-center">
                                        <h6> Mary Brown </h6>
                                        <p>Marketer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="Meet-With-Our-Team-box">
                                <div className="media">
                                    <img src="./assets/imags/Meet-With-Our-Team/Meet-With-Our-Team6.png" alt="" className="mr-3 rounded" />
                                    <div className="media-body align-self-center">
                                        <h6>Catherine Wilson</h6>
                                        <p>UI/UX Designer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="Meet-With-Our-Team-box">
                                <div className="media">
                                    <img src="./assets/imags/Meet-With-Our-Team/Meet-With-Our-Team7.png" alt="" className="mr-3 rounded" />
                                    <div className="media-body align-self-center">
                                        <h6>Dorothy Davies</h6>
                                        <p>Programer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="Meet-With-Our-Team-box">
                                <div className="media">
                                    <img src="./assets/imags/Meet-With-Our-Team/Meet-With-Our-Team8.png" alt="" className="mr-3 rounded" />
                                    <div className="media-body align-self-center">
                                        <h6>Hannah Hall</h6>
                                        <p>Article Writer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="Meet-With-Our-Team-box">
                                <div className="media">
                                    <img src="./assets/imags/Meet-With-Our-Team/Meet-With-Our-Team9.png" alt="" className="mr-3 rounded" />
                                    <div className="media-body align-self-center">
                                        <h6>Ada Roberts</h6>
                                        <p>Back-End Dev</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="Meet-With-Our-Team-box">
                                <div className="media">
                                    <img src="./assets/imags/Meet-With-Our-Team/Meet-With-Our-Team10.png" alt="" className="mr-3 rounded" />
                                    <div className="media-body align-self-center">
                                        <h6>Harry Lewis</h6>
                                        <p>Graphic Designer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="Meet-With-Our-Team-box">
                                <div className="media">
                                    <img src="./assets/imags/Meet-With-Our-Team/Meet-With-Our-Team11.png" alt="" className="mr-3 rounded" />
                                    <div className="media-body align-self-center">
                                        <h6>Ellen Frances</h6>
                                        <p>UI/UX Designer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="Meet-With-Our-Team-box">
                                <div className="media">
                                    <img src="./assets/imags/Meet-With-Our-Team/Meet-With-Our-Team12.png" alt="" className="mr-3 rounded" />
                                    <div className="media-body align-self-center">
                                        <h6>Eliza Thompson</h6>
                                        <p>Developer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="vertical-space-85"></div>
                </div>
            </section>
        </>
    )
}

export default AboutUs