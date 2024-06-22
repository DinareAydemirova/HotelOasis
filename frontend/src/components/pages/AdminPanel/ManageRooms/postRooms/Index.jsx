import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Helmet } from 'react-helmet';

const PostRooms = () => {
  const navigate = useNavigate();

  const initialValues = {
    images: [''],
    name: '',
    description: '',
    price: '',
    people: '',
    rate: '',
  };

  const validationSchema = yup.object({
    images: yup
      .array()
      .of(yup.string().required('Image URL is required'))
      .min(1, 'At least one image is required'),
    name: yup.string().required('Name is required'),
    price: yup.number().required('Price is required').positive(),
    people: yup.number().required('People count is required').positive(),
    description: yup.string().required('Description is required'),
    rate: yup.number().required('Rate is required').positive(),
  });

  const handleFormSubmit = (values, { setSubmitting }) => {
    axios
      .post('/rooms', values)
      .then(() => {
        toast.success("Image added successfully!");
        setTimeout(() => {
          navigate('/admin/rooms');
        }, 1000); 
      })
      .catch((error) => {
        toast.error("There was an error creating the menu item!");
        console.error('There was an error creating the room!', error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div className="text-gray-900 bg-gray-200 min-h-screen flex items-center justify-center p-6">
       <Helmet>
        <title>Admin Post Room - kinsley</title>
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
            <h2 className="text-2xl mb-4">Add New Room</h2>
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
              <label className="block text-gray-700">Price</label>
              <Field
                type="number"
                name="price"
                className="w-full px-3 py-2 border rounded"
              />
              <ErrorMessage name="price" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">People Count</label>
              <Field
                type="number"
                name="people"
                className="w-full px-3 py-2 border rounded"
              />
              <ErrorMessage name="people" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Rate</label>
              <Field
                type="number"
                name="rate"
                className="w-full px-3 py-2 border rounded"
              />
              <ErrorMessage name="rate" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Description</label>
              <Field
                as="textarea"
                name="description"
                className="w-full px-3 py-2 border rounded"
              />
              <ErrorMessage name="description" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Images</label>
              <FieldArray name="images">
                {({ push, remove, form }) => (
                  <div>
                    {form.values.images.map((image, index) => (
                      <div key={index} className="flex items-center mb-2">
                        <Field
                          type="text"
                          name={`images[${index}]`}
                          className="w-full px-3 py-2 border rounded"
                          placeholder="Enter image URL"
                        />
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <ErrorMessage name="images" component="div" className="text-red-500" />
                    <button
                      type="button"
                      onClick={() => push('')}
                      className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
                    >
                      Add Image
                    </button>
                  </div>
                )}
              </FieldArray>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Add Room'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PostRooms;
