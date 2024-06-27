import React, { useRef, useState } from "react";
import style from "../modal/Modal.module.scss";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import emailjs from "@emailjs/browser";

const Modal = ({ closeModal }) => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(false);

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
      setIsSuccess(true);
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
      .send(
        "service_dhp5dpe",
        "template_43000fy",
        templateParams,
        "B0TWgyT1gV8R_WZiW"
      )
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
        {!isSuccess ? (
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
        ) : (
          <div className="border rounded-lg shadow relative max-w-sm mx-auto">
            <div className="flex justify-end p-2">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                onClick={() => setIsSuccess(false)}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="p-6 pt-0 text-center">
              <svg
                className="w-20 h-20 text-green-600 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">
                Your reservation was successful!
                Check your email
              </h3>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  closeModal(false);
                }}
                className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
