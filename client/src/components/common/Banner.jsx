import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
      <section id="intro">
        <div className="carousel-item active">
          <div className="carousel-background"><img src="./assets/imags/slider/slider1.jpg" alt="" /></div>
          <div className="carousel-container">
            <div className="carousel-content">
              <h2 className="font-color-white">Find Jobs Now more Easy Way</h2>
              <p className="font-color-white">Lorem ipsum tempus amet conubia adipiscing fermentum viverra gravida,
                mollis suspendisse pretium dictumst inceptos mattis euismod lorem nulla, magna duis nostra
                sodales luctus nulla praesent fermentum a elit mollis purus aenean curabitur eleifend </p>
              <Link to="#!" data-toggle="modal" data-target="#myModal"><i
                className=" material-icons play">play_arrow</i></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner