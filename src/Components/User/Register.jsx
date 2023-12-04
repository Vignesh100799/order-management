import React from "react";
import { Link } from "react-router-dom";
import Logo from "../icons/Logo";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validate: (values) => {
      let errors = {};

      if (values.firstname === "") {
        errors.firstname = "* Required";
      }
      if (values.lastname === "") {
        errors.lastname = "* Required";
      }
      if (values.email === "") {
        errors.email = "* Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (values.password === "") {
        errors.password = "* Required";
      } else if (values.password.length < 3 || values.password.length >= 15) {
        errors.password = "password should be min 3 and max 8 characters";
      } else if (!/^[a-zA-Z0-9!@#$%^&*]{6,16}$/i.test(values.password)) {
        errors.password = "password must contain atlest one special characters";
      }
      if (values.cpassword === "") {
        errors.cpassword = "* Required";
      } else if (values.cpassword !== values.password) {
        errors.cpassword = "password fleid doesn't match";
      }

      return errors;
    },
    onSubmit: async(values) => {
      try {
        const response = await axios.post('https://65615e6adcd355c08323c948.mockapi.io/registered-users',values)
        if(response.status===201){
          toast.success('Registration Successfully done 😃!', {
            position: 'top-center',
          });
        }
        formik.resetForm()
      } catch (error) {
        console.error('Error during registration:', error);
        toast.error('Error during registration. Please try again.', {
          position: 'top-center',
        });
        
      }
    },
  });

  return (
    <div className="kvnkjabvav">
    <div className="container ">
      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          {/* Nested Row within Card Body */}
          <div className="row">
            <div className="col-lg-5 d-none d-lg-block bg-register-image" />
            <div className="col-lg-7">
              <div className="p-5">
                <div className="d-flex justify-content-center user-heading">
                  <Logo width={60} height={60} className="me-3 fill-orange" />
                  <h1 className="text-center  h1">ADUDU</h1>
                </div>
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <form className="user" onSubmit={formik.handleSubmit}>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="text"
                        className="form-control form-control-user"
                        id="exampleFirstName"
                        placeholder="First Name"
                        name="firstname"
                        value={formik.values.firstname}
                        onChange={formik.handleChange}
                      />
                      <span className="d-block ms-3 text-danger small">
                        {formik.errors.firstname}
                      </span>
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        className="form-control form-control-user"
                        id="exampleLastName"
                        placeholder="Last Name"
                        name="lastname"
                        value={formik.values.lastname}
                        onChange={formik.handleChange}
                      />
                      <span className="d-block ms-3 text-danger small">
                        {formik.errors.lastname}
                      </span>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-user"
                      id="exampleInputEmail"
                      placeholder="Email Address"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    <span className="d-block ms-3 text-danger small">
                      {formik.errors.email}
                    </span>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="password"
                        className="form-control form-control-user"
                        id="exampleInputPassword"
                        placeholder="Password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                      />
                      <span className="d-block ms-3 text-danger small">
                        {formik.errors.password}
                      </span>
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="password"
                        className="form-control form-control-user"
                        id="exampleRepeatPassword"
                        placeholder="Repeat Password"
                        name="cpassword"
                        value={formik.values.cpassword}
                        onChange={formik.handleChange}
                      />
                      <span className="d-block ms-3 text-danger small">
                        {formik.errors.cpassword}
                      </span>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary btn-user btn-block"
                    type="submit"
                  >
                    Register Account
                  </button>
                  <a href="..." className="btn btn-google btn-user btn-block">
                                    <i className="fab fa-google fa-fw"></i> Register with Google
                                </a>
                                <a href="..." className="btn btn-facebook btn-user btn-block">
                                    <i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                </a>
                  <hr />
                </form>
                <hr />
                <div className="text-center">
                  <Link className="small" to={"/forgot-password"}>
                    Forgot Password?
                  </Link>
                </div>
                <div className="text-center">
                  <Link className="small" to={"/login"}>
                    Already have an account? Login!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Register;
