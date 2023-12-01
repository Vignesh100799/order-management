import React from "react";
import { Link } from "react-router-dom";
import Logo from "../icons/Logo";
import { useFormik } from "formik";


const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {}
      if (values.email === '') {
        errors.email = "Please enter the email"
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (values.password === '') {
        errors.password = "Please enter the password"
      } else if (values.password.length < 3 || values.password.length >= 15) {
        errors.password = 'password should be min 3 and max 8 characters'
      } else if (!/^[a-zA-Z0-9!@#$%^&*]{6,16}$/i.test(values.password)) {
        errors.password = 'password must contain atlest one special characters'
      }
      return errors
    },
    onSubmit: (value, reset) => {
      console.log(value);
      reset.resetForm();
    },

  });
  return (
    <div className="kvnkjabvav vh-100">
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="d-flex justify-content-center user-heading">

                      <Logo width={60} height={60} className='me-3 fill-orange' />
                      <h1 className='text-center  h1'>
                        ADUDU
                      </h1>
                    </div>

                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form className="user" onSubmit={formik.handleSubmit} >
                      <div className="form-group">
                        <input
                          className="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                        />
                        <span className="d-block ms-3 text-danger small">{formik.errors.email}</span>
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                          name="password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                        />
                        <span className="d-block ms-3 text-danger small" >{formik.errors.password}</span>
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <button
                        className="btn btn-primary btn-user btn-block"
                        type="submit"
                      >
                        Login
                      </button>
                      <hr />
                    </form>
                    <hr />
                    <div className="text-center">
                      <Link className="small" to={"/forgot-password"}>
                        Forgot Password?
                      </Link>
                    </div>
                    <div className="text-center">
                      <Link className="small" to={"/register"}>
                        Create an Account!
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></div>
  );
};

export default Login;
