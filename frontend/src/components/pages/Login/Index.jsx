import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="gradient-form h-full bg-cyan-50 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200 mt-24">
          <div className="w-full max-w-md">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0 lg:w-full">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                      <img
                        className="mx-auto max-w-32 w-full"
                        src="https://kinsley.bslthemes.com/wp-content/uploads/2021/11/logo.png"
                        alt="logo"
                      />
                      <p className="mb-8 mt-4">Please login to your account</p>
                    </div>
                    <form>
                      <div className="relative mb-4" data-twe-input-wrapper-init="">
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear shadow-sm focus:shadow-md focus:border-cyan-500 dark:border-neutral-600 dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary"
                          id="exampleFormControlInput4"
                          placeholder="Username"
                        />
                      </div>

                      <div className="relative mb-4" data-twe-input-wrapper-init="">
                        <input
                          type="password"
                          className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear shadow-sm focus:shadow-md focus:border-cyan-500 dark:border-neutral-600 dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary"
                          id="exampleFormControlInput5"
                          placeholder="Password"
                        />
                      </div>
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                          type="button"
                          data-twe-ripple-init=""
                          data-twe-ripple-color="light"
                          style={{
                            background: "#80deea",
                          }}
                        >
                          Log in
                        </button>
                        <a href="#!" className="text-sm text-cyan-500 hover:text-cyan-600">Forgot password?</a>
                      </div>
                      <div className="flex items-center justify-between pb-6 flex-wrap	">
                        <p className="mb-0 me-2 text-sm">Don't have an account?</p>
                        <Link
                          to="/register"
                          type="button"
                          className="inline-block rounded border-2 border-cyan-500 px-6 pb-2 pt-2 text-xs font-medium uppercase leading-normal text-cyan-500 transition duration-150 ease-in-out hover:border-cyan-600 hover:bg-cyan-50 hover:text-cyan-600 focus:border-cyan-600 focus:bg-cyan-50 focus:text-cyan-600 focus:outline-none focus:ring-0 active:border-cyan-700 active:text-cyan-700 dark:hover:bg-cyan-900 dark:focus:bg-cyan-900"
                          data-twe-ripple-init=""
                          data-twe-ripple-color="light"
                        >
                          Register
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
