import React from "react";
import emailjs from "emailjs-com";
import { Formik, Form, Field } from "formik";

type ContactFormProps = {
  name: string;
  email: string;
  message: string;
  button: string;
};

interface Values {
  name: string;
  email: string;
  body: string;
}

export const ContactForm = ({
  name,
  email,
  message,
  button,
}: ContactFormProps) => {
  const initialValues: Values = {
    name: "",
    email: "",
    body: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values: any, actions: any) => {
        const { name, email, body } = values;
        const valuesForm = {
          name,
          email,
          body,
        };

        emailjs.send(
          "gmail",
          "personal_site_contact",
          valuesForm,
          "user_DuZ1yXYcXYbrSeIsLDeMX"
        );

        actions.setSubmitting(false);
        actions.resetForm({
          initialValues,
        });
      }}
    >
      <Form>
        <div className="form-group">
          <label htmlFor="name">{name}</label>
          <Field
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">{email}</label>
          <Field
            type="text"
            id="email"
            name="email"
            autoComplete="off"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">{message}</label>
          <Field component="textarea" id="message" name="body" required></Field>
        </div>
        <div className="text-center">
          <button type="submit">
            {button}
            <i className="fa fa-send"></i>
          </button>
        </div>
      </Form>
    </Formik>
  );
};
