import React from "react";
import Logo from "../icons/Logo";
import BarIcon from "../icons/BarIcon";
import DashIcon from "../icons/DashIcon";
import OrdeIcon from "../icons/OrdeIcon";
import ListIcon from "../icons/ListIcon";
import AdminIcon from "../icons/AdminIcon";
import SettingIcon from "../icons/SettingIcon";
import CommunityIcon from "../icons/CommunityIcon";
import TutoIcon from "../icons/TutoIcon";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  return (
    <nav
      className="navbar-nav sidebar border-end"
      id="accordionSidebar"
      style={{
        backgroundColor: "#F9FAFB",
      }}
    >
      <div className="sidebar-brand d-flex align-items-center justify-content-between">
        <div className="d-flex">
          <div className="sidebar-brand-icon ">
            <Logo width={31.16} height={24} className="me-2 fill-orange" />
          </div>
          <div
            className="page-title d-none d-lg-block"
            style={{
              fontFamily: "Inter",
              fontSize: "22px",
              fontWeight: "800",
              lineHeight: "27px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#DB551B",
            }}
          >
            ADUDU
          </div>{" "}
        </div>
        <div className="sidebar-brand-icon ">
          <BarIcon />
        </div>
      </div>
      <div></div>
      <div>
        <div className="mx-3">
          <ul className="navbar-nav me-auto mb-2 mb-lg-2" style={{cursor:'pointer'}}>
            <li
              className={`nav-item m-0 p-0  p-lg-2 ${
                location.pathname === "/dashboard" ? "bg-grey" : ""
              }`}
            >
              <Link to={"/dashboard"} className="nav-link p-0 w-100">
                <DashIcon className={"me-2"} />
                <span>Dashboard</span>
              </Link>
            </li>
            <li
              className={`nav-item m-0 p-0  p-lg-2 ${
                location.pathname === "/order" ? "bg-grey" : ""
              }`}
            >
              <Link to={"/order"} className="nav-link p-0 w-100">
                <OrdeIcon className={"me-2"} />
                <span>Order</span>
              </Link>
            </li>
            <li
              className={`nav-item m-0 p-0  p-lg-2 ${
                location.pathname === "/listing" ? "bg-grey" : ""
              }`}
            >
              <Link to={"/listing"} className="nav-link p-0 w-100">
                <ListIcon className={"me-2"} />
                <span>Listing</span>
              </Link>
            </li>
            <li
              className={`nav-item m-0 p-0  p-lg-2 ${
                location.pathname === "/admin" ? "bg-grey" : ""
              }`}
            >
              <Link to={"/admin"} className="nav-link p-0 w-100">
                <AdminIcon className={"me-2"} />
                <span>Admin</span>
              </Link>
            </li>
            <li
              className={`nav-item m-0 p-0  p-lg-2 ${
                location.pathname === "/settings" ? "bg-grey" : ""
              }`}
            >
              <Link to={"/settings"} className="nav-link p-0 w-100">
                <SettingIcon className={"me-2"} />

                <span>Setting</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* Heading */}
        <div className="mx-3">
          <div className="small text-muted">Links</div>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li
                className={`nav-item m-0 p-0  p-lg-2 ${
                  location.pathname === "/community" ? "bg-grey" : ""
                }`}
              >
                <Link to={"/community"} className="nav-link p-0 w-100">
                  <CommunityIcon className={"me-2"} />

                  <span>Community</span>
                </Link>
              </li> 
              <li
                className={`nav-item m-0 p-0  p-lg-2 ${
                  location.pathname === "/tutorial" ? "bg-grey" : ""
                }`}
              >
                <Link to={"/tutorial"} className="nav-link p-0 w-100">
                  <TutoIcon className={"me-2"} />

                  <span>Tutorial</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
