import { registerValidationSchema } from "./schema/validationSchema";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Icons/Logo";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import { config } from "../../config/config";
const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          `${config.usersApi}/registered-users`,
          values
        );
        if (response.status === 201) {
          toast.success("Registration Successfully done 😃!");
        }
        formik.resetForm();
      } catch (error) {
        console.error("Error during registration:", error);
        toast.error("Error during registration. Please try again.", {
          position: "top-center",
        });
      }
    },
  });

  return (
    <article className="container ">
      <section className="card o-hidden border-0 shadow-lg my-5">
        <main className="card-body p-0">          
          <section className="row">
            <figure className="col-lg-5 d-none m-0 d-lg-block bg-register-image">
            </figure>
            <section className="col-lg-7 p-5">
              
                <hgroup className="d-flex justify-content-center user-heading">
                  <Logo width={60} height={60} className="me-3 fill-orange" />
                  <h1 className="text-center  h1">ADUDU</h1>
                </hgroup>
                <header className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                </header>
                <form className="user" onSubmit={formik.handleSubmit}>
                  <fieldset className="form-group row">
                    <section className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="text"
                        className={`form-control form-control-user ${
                          formik.touched.firstname && formik.errors.firstname
                            ? "is-invalid"
                            : ""
                        }`}
                        id="firstname"
                        placeholder="First Name"
                        name="firstname"
                        value={formik.values.firstname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.firstname && formik.errors.firstname && (
                        <span className="d-block ms-3 text-danger small invalid-feedback">
                          {formik.errors.firstname}
                        </span>
                      )}
                    </section>
                    <section className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="text"
                        className={`form-control form-control-user ${
                          formik.touched.lastname && formik.errors.lastname
                            ? "is-invalid"
                            : ""
                        }`}
                        id="lastname"
                        placeholder="Last Name"
                        name="lastname"
                        value={formik.values.lastname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.lastname && formik.errors.lastname && (
                        <span className="d-block ms-3 text-danger small invalid-feedback">
                          {formik.errors.lastname}
                        </span>
                      )}
                    </section>
                  </fieldset>
                  <section className="form-group">
                    <input
                      type="text"
                      className={`form-control form-control-user ${
                        formik.touched.email && formik.errors.email
                          ? "is-invalid"
                          : ""
                      }`}
                      id="email"
                      placeholder="E-mail"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <span className="d-block ms-3 text-danger small invalid-feedback">
                        {formik.errors.email}
                      </span>
                    )}
                  </section>
                  <section className="form-group row">
                    <section className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="password"
                        className={`form-control form-control-user ${
                          formik.touched.password && formik.errors.password
                            ? "is-invalid"
                            : ""
                        }`}
                        id="password"
                        placeholder="Last Name"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.password && formik.errors.password && (
                        <span className="d-block ms-3 text-danger small invalid-feedback">
                          {formik.errors.password}
                        </span>
                      )}
                    </section>
                    <section className="col-sm-6">
                      <input
                        type="password"
                        className={`form-control form-control-user ${
                          formik.touched.cpassword && formik.errors.cpassword
                            ? "is-invalid"
                            : ""
                        }`}
                        id="cpassword"
                        placeholder="Last Name"
                        name="cpassword"
                        value={formik.values.cpassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.cpassword && formik.errors.cpassword && (
                        <span className="d-block ms-3 text-danger small invalid-feedback">
                          {formik.errors.cpassword}
                        </span>
                      )}
                    </section>
                  </section>
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
                    <i className="fab fa-facebook-f fa-fw"></i> Register with
                    Facebook
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
              
            </section>
          </section>
        </main>
      </section>
    </article>
  );
};

export default Register;
