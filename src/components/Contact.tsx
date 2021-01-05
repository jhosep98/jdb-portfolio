import React from "react";
import { ContactForm } from "./ContactForm";

type ContactProps = {
  title: string;
  subtitle: string;
  map: string;
};

export const Contact = ({ title, subtitle, map }: ContactProps) => {
  return (
    <section className="contact" id="contact">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <div className="contact__container">
        <div className="contact__containerInfo">
          <div className="contact__info">
            <ContactInfo
              social="Github:"
              link="https://github.com/jhosep98"
              name="@jhosep98"
              icon="fa fa-github"
            />
            <ContactInfo
              social="Linkedin:"
              link="https://www.linkedin.com/in/jhosep-davila/"
              name="@jhosep-davila"
              icon="fa fa-linkedin"
            />
            <ContactInfo
              social="Instagram:"
              link="https://www.instagram.com/jhosepdb/"
              name="@jhosepdb"
              icon="fa fa-instagram"
            />
            <iframe
              src={map}
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
          <ContactForm
            name="Your Name"
            email="Your Email"
            message="Your Message"
            button="send message"
          />
        </div>
      </div>
    </section>
  );
};

type ContactInfoProps = {
  social: string;
  link: string;
  name: string;
  icon: string;
};

const ContactInfo = ({ social, link, name, icon }: ContactInfoProps) => {
  return (
    <div>
      <i className={icon}></i>
      <h4>{social}</h4>
      <a href={link} target="_blank">
        <p className="github">{name}</p>
      </a>
    </div>
  );
};
