import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostMenu = () => {
  const navigate = useNavigate();

  const initialValues = {
    image: "",
    name: "",
    ingredients: "",
    price: "",
    category: "",
  };

  const validationSchema = yup.object({
    image: yup.string().required("Image is required"),
    name: yup.string().required("Name is required"),
    price: yup.number().required("Price is required").positive(),
    category: yup.string().required("Category is required"),
    ingredients: yup.string().required("Ingredients are required"),
  });

  const handleFormSubmit = (values, { setSubmitting }) => {
    axios
      .post("/menu", values)
      .then(() => {
        toast.success("Image added successfully!");
        setTimeout(() => {
          navigate("/admin/menu");
        }, 1000); 
        
      })
      .catch((error) => {
        toast.error("There was an error creating the menu item!");
        console.error("There was an error creating the menu!", error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="text-gray-900 bg-gray-200 min-h-screen flex items-center justify-center">
      <Helmet>
        <title>Admin Post Menu - Kinsley</title>
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
            <h2 className="text-2xl mb-4">Add New Menu</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <Field
                type="text"
                name="name"
                className="w-full px-3 py-2 border rounded"
              />
              <ErrorMessage name="name" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Ingredients</label>
              <Field
                as="textarea"
                name="ingredients"
                className="w-full px-3 py-2 border rounded"
              />
              <ErrorMessage name="ingredients" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Price</label>
              <Field
                type="number"
                name="price"
                className="w-full px-3 py-2 border rounded"
              />
              <ErrorMessage name="price" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Category</label>
              <Field
                as="select"
                name="category"
                className="w-full px-3 py-2 border rounded"
              >
                <option value="" label="Select category" />
                <option value="Salad" label="Salad" />
                <option value="Main dish" label="Main dish" />
                <option value="Dessert" label="Dessert" />
              </Field>
              <ErrorMessage name="category" component="div" className="text-red-500" />
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
              {isSubmitting ? "Submitting..." : "Add Menu Item"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PostMenu;
