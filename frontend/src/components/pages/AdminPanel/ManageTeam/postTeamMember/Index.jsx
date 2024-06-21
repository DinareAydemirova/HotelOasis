import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';
import { Helmet } from "react-helmet";

const PostTeamMember = () => {
  const navigate = useNavigate();

  const initialValues = {
    image: "",
    fullname: "",
    age: "",
    email: "",
    phone: "",
    position: "",
  };

  const validationSchema = yup.object({
    image: yup.string().required("Image is required"),
    fullname: yup.string().required("Full name is required"),
    age: yup.number().required("Age is required").positive().integer(),
    email: yup.string().email("Invalid email format").required("Email is required"),
    phone: yup.string().required("Phone is required"),
    position: yup.string().required("Position is required"),
  });

  const handleFormSubmit = (values, { setSubmitting }) => {
    axios
      .post("/team", values)
      .then(() => {
        navigate("/admin/team");
      })
      .catch((error) => {
        console.error("There was an error creating the team member!", error);
      })
      
  };

  return (
    <div className="text-gray-900 bg-gray-200 min-h-screen flex items-center justify-center">
       <Helmet>
        <title>Admin Post Team - kinsley</title>
        <link
          rel="shortcut icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUgFpfnDFc3lR56q1erL71EEv1lNvDYrbfQ&s"
          type="image/x-icon"
        />
      </Helmet>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="bg-white p-6 rounded shadow-md w-full max-w-lg">
            <h2 className="text-2xl mb-4">Add New Team Member</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Full Name</label>
              <Field
                type="text"
                name="fullname"
                className="w-full px-3 py-2 border rounded"
              />
              <ErrorMessage name="fullname" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Position</label>
              <Field
                type="text"
                name="position"
                className="w-full px-3 py-2 border rounded"
              />
              <ErrorMessage name="position" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Age</label>
              <Field
                type="number"
                name="age"
                className="w-full px-3 py-2 border rounded"
              />
              <ErrorMessage name="age" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <Field
                type="email"
                name="email"
                className="w-full px-3 py-2 border rounded"
              />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone</label>
              <Field
                type="text"
                name="phone"
                className="w-full px-3 py-2 border rounded"
              />
              <ErrorMessage name="phone" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Image URL</label>
              <Field
                type="text"
                name="image"
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter image URL"
              />
              <ErrorMessage name="image" component="div" className="text-red-500" />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Add Team Member"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PostTeamMember;
