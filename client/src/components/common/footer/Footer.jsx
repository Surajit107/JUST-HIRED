import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  // handelSubmit function
  const handlesubmit = (e) => {
    e.preventDefault()
  }


  return (
    <>
      <footer id="footer" className="background-color-white">
        <div className="container">
          <div className="vertical-space-100"></div>
          <div className="row">
            <div className="col-lg-4 col-md-6 vertical-space-2">
              <h5>About Us</h5>
              <p className="paregraf">Tristique velit phasellus sed auctor leo eros luctus nibh fermentu ad impediet
                rhonus dolor habitant purus velit aliquet donecurna ut in turpis faucibus</p>
              <Link to="#!">
                <i className="fa fa-facebook social-icon"></i></Link>
              <Link to="#!">
                <i className="fa fa-twitter social-icon"></i></Link>
              <Link to="#!">
                <i className="fa fa-pinterest-p social-icon"></i></Link>
              <Link to="#!">
                <i className="fa fa-map-marker social-icon"></i></Link>
            </div>
            <div className="col-lg-2 col-md-6 vertical-space-2">
              <h5>Company</h5>
              <div className="text">
                <Link to="#!">Mshape Themes Limited.</Link>
                <Link to="#!">Scalegoss Limited.</Link>
                <Link to="#!">Supwin Themes Limited.</Link>
                <Link to="#!">Mshape Themes Limited.</Link>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 vertical-space-2">
              <h5>Supports</h5>
              <div className="text">
                <Link to="/aboutus">About</Link>
                <Link to="#!">Support</Link>
                <Link to="#!">Tems</Link>
                <Link to="#!">Privacy</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 vertical-space-2">
              <h5>Subscribe Us</h5>
              <p>Get latest update and newsletter</p>
              <div className="vertical-space-30"></div>
              <form onSubmit={handlesubmit}>
                <input
                  type="email"
                  className="email "
                  placeholder="Email Address "
                  required
                />
                <span className="fa fa-envelope email-icone "></span>
                <input type="submit" className="Subscribe" value="Subscribe" />
              </form>
            </div>
          </div>
          <div className="vertical-space-60"></div>
        </div>
        <div className="container-fluid background-color-orange main-footer">
          <div className="container text-center">
            <div className="vertical-space-30"></div>
            <p>&#169; 2024 Job Board || All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer