import React, { useRef } from "react";
import style from "../liveMessage/LiveMessage.module.scss";
import { Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const LiveMessage = () => {
  const form = useRef();

  const sendEmail = (values) => {
    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      to_name: "Kinsley team",
      message: values.message,
      to_email: values.email,
    };

    emailjs
      .send("service_dhp5dpe", "template_87c7s2k", templateParams, "B0TWgyT1gV8R_WZiW")
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className={style.messageSection}>
      <div className={style.container}>
        <div className={style.headings}>
          <h1>Kinsley is Waiting for You!</h1>
          <p>
            Consectetur adipisicing elit. Nihil, illum voluptate eveniet ex
            fugit ea delectus, sed voluptatem. Laborum accusantium libero
            commodi id officiis itaque esse adipisci, necessitatibus asperiores,
            illo odio.
          </p>
          <Link to="/about">Learn about us</Link>
        </div>

        <div className={style.message}>
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={Yup.object({
              name: Yup.string()
                .min(2, "Must be 2 characters at least")
                .required("Required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              message: Yup.string()
                .min(20, "Must be 20 characters at least")
                .required("Required"),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              sendEmail(values);
              setSubmitting(false);
              resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Form ref={form}>
                <div className={style.inputs}>
                  <div className="flex flex-col w-full">
                    <Field type="text" name="name" placeholder="Name" />
                    <ErrorMessage className="text-red-500" name="name" component="span" />
                  </div>
                  <div className="flex flex-col w-full">
                    <Field type="email" name="email" placeholder="Email" />
                    <ErrorMessage className="text-red-500" name="email" component="span" />
                  </div>
                  
                </div>
                <Field as="textarea" name="message" placeholder="Message" className={style.textarea} />
                <ErrorMessage className="text-red-500" name="message" component="span" />
                <button type="submit" disabled={isSubmitting} className={style.button}>
                  Send
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LiveMessage;
