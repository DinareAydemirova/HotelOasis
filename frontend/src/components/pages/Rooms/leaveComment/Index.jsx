import React from "react";
import axios from "axios";
import style from "./LeaveComment.module.scss";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object({
  username: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  comment: Yup.string()
    .max(500, "Must be 500 characters or less")
    .required("Required"),
});

const handleFormSubmit = (values, { setSubmitting, resetForm }) => {
  axios
    .post("/comment", values)
    .then(() => {
      toast.success("Comment sent successfully!");
      resetForm();
    })
    .catch((error) => {
      toast.error("There was an error submitting your comment!");
      console.error("There was an error submitting your comment!", error);
    })
    .finally(() => {
      setSubmitting(false);
    });
};

const LeaveComment = () => {
  return (
    <div className={style.comment}>
      <div className={style.container}>
        <h1>Leave a Comment</h1>
        <Formik
          initialValues={{ username: "", email: "", comment: "" }}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className={style.inputs}>
                <div>
                  <Field type="text" name="username" placeholder="Your Name" />
                  <ErrorMessage name="username" component="div" className={style.error} />
                </div>
                <div>
                  <Field type="text" name="email" placeholder="Your Email" />
                  <ErrorMessage name="email" component="div" className={style.error} />
                </div>
              </div>
              <div>
                <Field
                  as="textarea"
                  name="comment"
                  placeholder="Leave your comment here"
                />
                <ErrorMessage name="comment" component="div" className={style.error} />
              </div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LeaveComment;
