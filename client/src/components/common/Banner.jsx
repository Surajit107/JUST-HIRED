import React from 'react'

const Banner = ({ banner_img_src }) => {
  return (
    <>
      <section id="intro">
        <div className="carousel-item active">
          <div className="carousel-background"><img src={banner_img_src} alt="" /></div>
          <div className="carousel-container">
            <div className="carousel-content">
              <h2 className="font-color-white">Find Jobs Now more Easy Way</h2>
              <p className="font-color-white">Lorem ipsum tempus amet conubia adipiscing fermentum viverra gravida,
                mollis suspendisse pretium dictumst inceptos mattis euismod lorem nulla, magna duis nostra
                sodales luctus nulla praesent fermentum a elit mollis purus aenean curabitur eleifend </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner