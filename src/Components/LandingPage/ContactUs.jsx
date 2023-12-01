import { useFormik } from "formik";
import React from "react";
import { ToastContainer,toast } from "react-toastify";

const ContactUs = () => {
  const notify = () => toast("Wow so easy !");

  const formik = useFormik({
    initialValues: {
      customerName: '',
      email: '',
      phoneNo: '',
      message: '',
    },
    validate: (values) => {
      let errors = {}
      if (values.customerName === '') {
        errors.customerName = "A name is required."
      }
      if (values.email === '') {
        errors.email = "An email is required."
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email is not valid.';
      }
      if (values.phoneNo === '') {
        errors.phoneNo = "A phone number is required."
      }
      if (values.message === '') {
        errors.message = "A message is required."
      }
      return errors;
    },
    onSubmit: (values) => {
      console.log(values)
      formik.resetForm()
    }
  });
  return (
    <section className="bg-light py-5">
      <div className="container px-5 my-5 px-5">
        <div className="text-center mb-5">
          <div className="feature bg-success bg-gradient text-white rounded-3 mb-3">
            <i className="bi bi-envelope" />
          </div>
          <h2 className="fw-bolder">Get in touch</h2>
          <p className="lead mb-0">We'd love to hear from you</p>
        </div>
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-6">
            <form onSubmit={formik.handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="customerName"
                  type="text"
                  placeholder="Enter your name..."
                  name="customerName"
                  value={formik.values.customerName}
                  onChange={formik.handleChange}

                />
                <label htmlFor="name">Full name</label>
                <div
                  className="text-danger"

                >
                  {formik.errors.customerName}
                </div>
              </div>

              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="email"
                  type="text"
                  placeholder="name@example.com"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                <label htmlFor="email">Email address</label>
                <div
                  className="text-danger"
                >
                  {formik.errors.email}
                </div>
              </div>

              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="phoneNo"
                  type="tel"
                  placeholder="(123) 456-7890"
                  name="phoneNo"
                  value={formik.values.phoneNo}
                  onChange={formik.handleChange}
                />
                <label htmlFor="phone">Phone number</label>
                <div
                  className="text-danger"
                >
                  {formik.errors.phoneNo}
                </div>
              </div>

              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="message"
                  type="text"
                  placeholder="Enter your message here..."
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  cols={20}
                  rows={3}
                />
                <label htmlFor="message">Message</label>
                <div
                  className="text-danger"

                >
                  {formik.errors.message}
                </div>
              </div>

              <div className="d-grid">
                <button
                  className={`btn btn-success btn-lg ${formik.isValid ? '' : 'disabled'}`}
                  id="submitButton"
                  type="submit"
                  onClick={notify}
                >
                  Submit
                </button>
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
