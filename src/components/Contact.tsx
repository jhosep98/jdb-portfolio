import React from "react";

export const Contact = () => {
  return (
    <section className="contact">
      <h2>contact</h2>
      <p>Contact me</p>
      <div className="contact__container">
        <div className="contact__containerInfo">
          <div className="contact__info">
            <div className="contact__github">
              <i className="fa fa-github-alt"></i>
              <h4>Github:</h4>
              <p className="github">@jhosep98</p>
            </div>
            <div className="contact__github">
              <i className="fa fa-github-alt"></i>
              <h4>Github:</h4>
              <p className="github">@jhosep98</p>
            </div>
            <div className="contact__github">
              <i className="fa fa-github-alt"></i>
              <h4>Github:</h4>
              <p className="github">@jhosep98</p>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105073.26495778574!2d-58.503509784803484!3d-34.61580363807845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1609606681545!5m2!1ses-419!2sar"
              width="100%"
              height="290"
              frameBorder="0"
              style={{ border: 0 }}
              aria-hidden="false"
              tabIndex={0}
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="contact__form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="text" id="email" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <textarea id="email"></textarea>
            </div>
            <div className="text-center">
              <button type="submit">send message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
