import React from "react";
import profileLogo from "../assets/img/undraw_profile.svg";
import Layout from "./layout/Layout";
const Settings = () => {
  const user = JSON.parse(localStorage.getItem("user-info"));
  
  return (
    <Layout>
      <article className="row justify-content-center">
        <section className="col-md-12">
          <header className="card shadow mb-4 ">
            <div className="card-header py-3 text-center">
              <h4 className="m-0 font-weight-bold text-orange">Profile</h4>
            </div>
            <main className="card-body">
              <article className="row">
                <section className="col-md-3 border-end">
                  <figure>
                    <img
                      className="img-profile img-thumbnail rounded-circle"
                      src={profileLogo}
                      alt="profile"
                    />
                    <figcaption className="h4 text-center mt-2">
                      {user.firstname}
                    </figcaption>
                  </figure>
                </section>
                <section className="col-md-9 py-2 px-lg-5 px-sm-0">
                  <form className="">
                    <fieldset className="form-group card border">
                      <legend className="text-center card-header">Personal Information</legend>
                      <div className="card-body d-flex flex-wrap">
                      <div className="col-sm-6 mb-3">
                        <label htmlFor="firstname" className="form-label ml-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstname"
                          id="firstname"
                          className="form-control form-control-profile px-3 py-4"
                          placeholder="first name"
                        />
                      </div>
                      <div className="col-sm-6 mb-3 ">
                        <label htmlFor="lastname" className="form-label ml-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastname"
                          id="lastname"
                          className="form-control form-control-profile px-3 py-4"
                          placeholder="last name"
                        />
                      </div>
                      <div className="col-sm-6 mb-3 ">
                        <label htmlFor="email" className="form-label ml-2">
                          Email
                        </label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="form-control form-control-profile px-3 py-4"
                          placeholder="e-mail"
                        />
                      </div>
                      <div className="col-sm-6 mb-3 ">
                        <label htmlFor="number" className="form-label ml-2">
                         Mobile
                        </label>
                        
                        <input
                          type="number"
                          name="number"
                          id="number"
                          className="form-control form-control-profile px-3 py-4"
                          placeholder="number"
                        />
                      </div>

                      <div className="col-sm-6 mb-3">
                        <label
                          htmlFor="gender"
                          className="form-check-label my-0 py-0  mx-lg-2"
                        >
                          {" "}
                          Gender :{" "}
                        </label>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="male"
                            name="gender"
                            value="male"
                          />
                          <label className="form-check-label" htmlFor="male">
                            Male
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                          />
                          <label className="form-check-label" htmlFor="female">
                            Female
                          </label>
                        </div>
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label
                          htmlFor="m_status"
                          className="form-check-label my-0 py-0  mx-lg-2"
                        >
                          {" "}
                          Maritial Status:{" "}
                        </label>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="married"
                            name="m_status"
                            value="married"
                          />
                          <label className="form-check-label" htmlFor="married">
                            Married
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="unmarried"
                            name="m_status"
                            value="unmarried"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="unmarried"
                          >
                            Unmarried
                          </label>
                        </div>
                      </div>
                      </div>
                    </fieldset>
                    <fieldset className="form-group card ">
                      <legend className="card-header text-center">
                        Address
                      </legend>
                      <div className="card-body d-flex flex-wrap">
                      <div className="col-sm-6 mb-3">
                        <label htmlFor="address.street" className="form-label ml-2">Street/D.No</label>
                        <input type="text" name="address.street" id="address.street" className="form-control form-control-profile px-3 py-4" placeholder="street" />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label htmlFor="address.town" className="form-label ml-2">Town/Village</label>
                        <input type="text" name="address.town" id="address.town" className="form-control form-control-profile px-3 py-4" placeholder="town" />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label htmlFor="address.city" className="form-label ml-2">City</label>
                        <input type="text" name="address.city" id="address.city" className="form-control form-control-profile px-3 py-4" placeholder="city" />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label htmlFor="address.country" className="form-label ml-2">Country</label>
                        <input type="text" name="address.country" id="address.country" className="form-control form-control-profile px-3 py-4" placeholder="country" />
                      </div>
                      <div className="col-sm-6 mb-3">
                        <label htmlFor="address.pincode" className="form-label ml-2">Pincode</label>
                        <input type="number" name="address.pincode" id="address.pincode" className="form-control form-control-profile px-3 py-4" placeholder="pincode" />
                      </div>

                      </div>

                    </fieldset>
                    <div className="d-grid gap-2 col-lg-4 mx-auto mt-4">
                      <button type="submit" className="btn btn-primary ">
                        save
                      </button>
                    </div>
                  </form>
                </section>
              </article>
            </main>
          </header>
        </section>
      </article>
    </Layout>
  );
};

export default Settings;
