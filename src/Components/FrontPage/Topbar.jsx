import React from "react";
import { Link } from "react-router-dom";
import Logo from "../icons/Logo";

const Topbar = () => {
    
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-orange">
      <div className="container px-0">
        <span className="navbar-brand d-flex">
          <Logo width={60} height={60} className="me-3 fill-white" />
          <h1 className="h1">ADUDU</h1>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#!">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                Services
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/login"}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
