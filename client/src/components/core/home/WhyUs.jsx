import React from 'react'
import { Link } from 'react-router-dom'

const WhyUs = () => {
    return (
        <>
            <section id="Jobtend">
                <div class="container">
                    <div class="vertical-space-85"></div>
                    <div class="row">
                        <div class="col-lg-9 col-md-6  align-self-center">
                            <h3 class="title">Jobtend - Best Place to Find Jobs & Employee</h3>
                            <div class="vertical-space-30"></div>
                            <p class="max-width">Lorem ipsum tempus amet conubia adipiscing fermentum viverra gravida, mollis
                                suspendisse pretium dictumst inceptos mattis euismod lorem nulla magna duis nostra sodales
                                luctus nulla
                            </p>
                            <div class="vertical-space-30"></div>
                            <h4>Why we are best</h4>
                            <div class="vertical-space-30"></div>
                            <ul>
                                <li class="list-item1 ">Et vestibulum ullamcorper curae tellus consectetur erat pharetra et
                                    cubilia
                                    <br /> Nibh est auctor lacus nam lacinia aptent
                                </li>
                                <li class="list-item1 ">Vitae sociosqu a nisi cubilia vulputate aliquam vulputate imperdiet
                                    tempor arcu fames</li>
                                <li class="list-item1 ">Odio habitasse senectus morbi dapibus mauris non primis, nisl ante
                                    hendrerit consectetur nulla phasellus eleifend, ad at scelerisque vulputate habitant tempor
                                </li>
                            </ul>
                            <div class="vertical-space-30"></div>
                            <Link to="#!" class="Explore-Employee">Explore Employee</Link>
                            <Link to="#!" class="Explore-New-Jobs">Explore New Jobs</Link>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <img src="./assets/imags/man.png" alt="" class="man-img" />
                        </div>
                        <div class="vertical-space-60"></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyUs