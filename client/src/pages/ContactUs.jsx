import React from 'react'

const ContactUs = () => {
  return (
    <>
      <section id="Contact_us">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29472.57956071659!2d88.40016442490067!3d22.576393640100406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b020703c0d%3A0xece6f8e0fc2e1613!2sSector%20V%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1679601323577!5m2!1sen!2sin" width="100%" height="650" style={{ "border": "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='My Map'></iframe>
      </section>


      <section id="Get-in-Touch">
        <div class="container text-center position-absolute">
          <div class="Get-in-Touch-box">
            <h3 class="text-left">Get in Touch</h3>
            <div class="vertical-space-5"></div>
            <p class="text-left">Lorem ipsum tempus amet conubia adipiscing fermentum viverra gravida sodales luctus
              nulla</p>
            <div class="vertical-space-40"></div>
            <form>
              <div class="row">
                <div class=" col-lg-6 col-md-12">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Full name" required />
                    <span class="fa fa-user icone "></span>
                  </div>
                </div>
                <div class=" col-lg-6 col-md-12">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Subject" required />
                    <span class="fa fa-file icone "></span>
                  </div>
                </div>
                <div class=" col-lg-6 col-md-12">
                  <div class="form-group">
                    <input type="email" class="form-control" placeholder="Email address" required />
                    <span class="fa fa-envelope icone "></span>
                  </div>
                </div>
                <div class=" col-lg-6 col-md-12">
                  <div class="form-group">
                    <input type="tel" class="form-control" placeholder="Phone number" required />
                    <span class="fa fa-phone icone "></span>
                  </div>
                </div>
                <div class=" col-lg-12 col-md-12">
                  <div class="form-group">
                    <textarea class="form-control" placeholder="Messege" rows="3" required></textarea>
                  </div>
                </div>
              </div>
              <button type="submit" class="Send">Send</button>
              <button type="reset" class="button button-rounded  close">&times;</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs