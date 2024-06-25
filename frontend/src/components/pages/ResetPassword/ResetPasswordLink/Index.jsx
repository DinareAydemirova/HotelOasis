import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const LinkToResetPassword = () => {
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleResetPassword = async (values, { resetForm }) => {
    try {
      const response = await fetch("http://localhost:3000/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      resetForm();
      setError(null);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <section className="gradient-form h-full bg-cyan-50 dark:bg-neutral-700">
      <Helmet>
        <title>Reset password - kinsley</title>
        <link
          rel="shortcut icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUgFpfnDFc3lR56q1erL71EEv1lNvDYrbfQ&s"
          type="image/x-icon"
        />
      </Helmet>
      <div className="container h-full p-10">
        <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200 mt-24">
          <div className="w-full max-w-md">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0 lg:w-full">
                  <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={Yup.object({
                      email: Yup.string()
                        .email("Invalid email address")
                        .required("Required"),
                      password: Yup.string().required("Required"),
                    })}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                      setSubmitting(false);
                      handleResetPassword(values, { resetForm });
                    }}
                  >
                    <Form className="md:mx-6 md:p-12">
                      <div className="text-center">
                        <img
                          className="mx-auto max-w-32 w-full"
                          src="https://kinsley.bslthemes.com/wp-content/uploads/2021/11/logo.png"
                          alt="logo"
                        />
                        <p className="mb-8 mt-4">
                          Please enter your email to reset your password
                        </p>
                      </div>
                      <div
                        className="relative mb-4"
                        data-twe-input-wrapper-init=""
                      >
                        <Field
                          type="email"
                          className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear shadow-sm focus:shadow-md focus:border-cyan-500 dark:border-neutral-600 dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary"
                          id="exampleFormControlInput4"
                          placeholder="Email"
                          name="email"
                        />
                        <ErrorMessage
                          name="email"
                          component="span"
                          className="text-red-500"
                        />
                      </div>
                      <div className="relative mb-4">
                        <Field
                          type={showPassword ? "text" : "password"}
                          name="password"
                          className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear shadow-sm focus:shadow-md focus:border-cyan-500 dark:border-neutral-600 dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary"
                          id="exampleFormControlInput5"
                          placeholder="Password"
                        />
                        <span
                          className="absolute right-3 top-2 cursor-pointer"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                        <ErrorMessage
                          name="password"
                          component="span"
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                          type="submit"
                          style={{
                            background: "#80deea",
                          }}
                        >
                          RESET PASSWORD
                        </button>
                      </div>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkToResetPassword;
