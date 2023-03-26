import React, { useEffect } from 'react'

const ContactUs = () => {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section id="Contact_us">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29472.57956071659!2d88.40016442490067!3d22.576393640100406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b020703c0d%3A0xece6f8e0fc2e1613!2sSector%20V%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1679601323577!5m2!1sen!2sin" width="100%" height="650" style={{ "border": "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='My Map'></iframe>
      </section>


      <section id="Get-in-Touch">
        <div className="container text-center position-absolute">
          <div className="Get-in-Touch-box">
            <h3 className="text-left">Get in Touch</h3>
            <div className="vertical-space-5"></div>
            <p className="text-left">Lorem ipsum tempus amet conubia adipiscing fermentum viverra gravida sodales luctus
              nulla</p>
            <div className="vertical-space-40"></div>
            <form>
              <div className="row">
                <div className=" col-lg-6 col-md-12">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Full name" required />
                    <span className="fa fa-user icone "></span>
                  </div>
                </div>
                <div className=" col-lg-6 col-md-12">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Subject" required />
                    <span className="fa fa-file icone "></span>
                  </div>
                </div>
                <div className=" col-lg-6 col-md-12">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email address" required />
                    <span className="fa fa-envelope icone "></span>
                  </div>
                </div>
                <div className=" col-lg-6 col-md-12">
                  <div className="form-group">
                    <input type="tel" className="form-control" placeholder="Phone number" required />
                    <span className="fa fa-phone icone "></span>
                  </div>
                </div>
                <div className=" col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea className="form-control" placeholder="Messege" rows="3" required></textarea>
                  </div>
                </div>
              </div>
              <button type="submit" className="Send">Send</button>
              <button type="reset" className="button button-rounded  close">&times;</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs