import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostRestaurantImage = () => {
  const navigate = useNavigate();
  const initialValues = {
    image: "",
  };

  const validationSchema = yup.object({
    image: yup.string().required("Image is required"),
  });

  const handleFormSubmit = (values, { setSubmitting }) => {
    axios
      .post("/restaurant", values)
      .then(() => {
        toast.success("Image added successfully!");
        setTimeout(() => {
          navigate("/admin/restaurant");
        }, 1000);
      })
      .catch((error) => {
        toast.error("There was an error creating the image!");
        console.error("There was an error creating the image!", error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };
  return (
    <div className="text-gray-900 bg-gray-200 min-h-screen flex items-center justify-center">
      <Helmet>
        <title>Admin Post Image - Kinsley</title>
        <link
          rel="shortcut icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUgFpfnDFc3lR56q1erL71EEv1lNvDYrbfQ&s"
          type="image/x-icon"
        />
      </Helmet>
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="bg-white p-6 rounded shadow-md w-full max-w-lg">
            <h2 className="text-2xl mb-4">Add New Restaurant Image</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Image URL</label>
              <Field
                type="text"
                name="image"
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter image URL"
              />
              <ErrorMessage
                name="image"
                component="div"
                className="text-red-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Add Image"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PostRestaurantImage;
