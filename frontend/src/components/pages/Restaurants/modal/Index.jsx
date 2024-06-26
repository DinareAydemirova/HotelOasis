import React, { useRef } from "react";
import style from "../modal/Modal.module.scss";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios"; 
import emailjs from "@emailjs/browser";

const Modal = ({ closeModal }) => {
  const form = useRef();
  const validationSchema = Yup.object().shape({
    day: Yup.date().required("Date is required"),
    time: Yup.string().required("Time is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    people: Yup.number().required("Number of people is required"),
  });

  const handleReserveClick = async (values) => {
    try {
      await axios.post("/reservation", values); 
      sendEmail(values);

      closeModal(false); 
    } catch (error) {
      console.error("Error submitting reservation:", error);
    }
  };

  const sendEmail = (values) => {
    const templateParams = {
      from_email: values.email,
      to_email: values.email,
      to_name: "Kinsley team",
    };

    emailjs
      .send("service_dhp5dpe", "template_43000fy", templateParams, "B0TWgyT1gV8R_WZiW")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className={style.modal}>
      <div className={style.container}>
        <button className={style.closeButton} onClick={() => closeModal(false)}>
          X
        </button>
        <Formik
          initialValues={{
            day: "",
            time: "",
            email: "",
            people: 1,
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => handleReserveClick(values)}
        >
          {({ handleSubmit }) => (
            <Form ref={form} onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <Field name="day" type="date" className="w-full" />
                <ErrorMessage
                  name="day"
                  component="span"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <Field name="time" type="time" className="w-full" />
                <ErrorMessage
                  name="time"
                  component="span"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full"
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <Field as="select" name="people" className="w-full">
                  <option value="1">1 person</option>
                  <option value="2">2 people</option>
                  <option value="3">3 people</option>
                  <option value="4">4 people</option>
                  <option value="5">5 people</option>
                  <option value="6">6 people</option>
                  <option value="7">7 people</option>
                  <option value="8">8 people</option>
                  <option value="9">9 people</option>
                  <option value="10">10 people</option>
                </Field>
                <ErrorMessage
                  name="people"
                  component="span"
                  className="text-red-500 text-sm"
                />
              </div>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Modal;
