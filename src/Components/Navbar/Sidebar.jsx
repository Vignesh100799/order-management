import React, { useEffect } from "react";
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

const Sidebar = ({ sidebarToggle, setSidebarToggle, handleSidebar}) => {
  const location = useLocation();
  

  
  let sidebarClasses = ''
  sidebarClasses += sidebarToggle
    ? 'navbar-nav  sidebar accordion '
    : 'navbar-nav sidebar accordion toggled '

  let margin = ''
  margin += sidebarToggle ? '8.5px' : ''

  useEffect(() => {
    window.addEventListener('resize', function () {
      if (window.innerWidth < 496) {
        setSidebarToggle(false)
      } else {
        setSidebarToggle(true)
      }
    })
  })
  return (
    <nav
    className={sidebarClasses} id="accordionSidebar"
      style={{
        backgroundColor: "#F9FAFB",
      }}
    >
      <div className="sidebar-brand d-flex align-items-center justify-content-around">
        <div className="d-flex">
          <div className="sidebar-brand-icon ">
            <Logo width={31.16} height={24} className="me-2 fill-orange" />
          </div>
          
        </div>
        <div className="sidebar-brand-icon text-center d-none d-md-block">
        <button
          // className="rounded-circle border-0 bg-grey p-2 text-white"
          className="border-0"
          style={{background:'none',}}
          
          onClick={handleSidebar}
        ><BarIcon /></button>
        </div>
      </div>
      <div></div>
      <div>
        <div className="mx-3">
          <ul className="navbar-nav me-auto mb-2 mb-lg-2" style={{cursor:'pointer'}}>
            <li
              className={`nav-item m-0 p-0  p-md-2 ${
                location.pathname === "/dashboard" ? "bg-grey" : ""
              }`}
            >
              <Link to={"/dashboard"} className="nav-link p-0 w-100">
                <DashIcon className={"me-2"} />
                <span className="text-black" >Dashboard</span>
              </Link>
            </li>
            <li
              className={`nav-item m-0 p-0  p-md-2 ${
                location.pathname === "/order" ? "bg-grey" : ""
              }`}
            >
              <Link to={"/order"} className="nav-link p-0 w-100">
                <OrdeIcon className={"me-2"} />
                <span className="text-black">Order</span>
              </Link>
            </li>
            <li
              className={`nav-item m-0 p-0  p-md-2 ${
                location.pathname === "/listing" ? "bg-grey" : ""
              }`}
            >
              <Link to={"/listing"} className="nav-link p-0 w-100">
                <ListIcon className={"me-2"} />
                <span className="text-black" >Listing</span>
              </Link>
            </li>
            <li
              className={`nav-item m-0 p-0  p-md-2 ${
                location.pathname === "/admin" ? "bg-grey" : ""
              }`}
            >
              <Link to={"/admin"} className="nav-link p-0 w-100">
                <AdminIcon className={"me-2"} />
                <span className="text-black">Admin</span>
              </Link>
            </li>
            <li
              className={`nav-item m-0 p-0  p-md-2 ${
                location.pathname === "/settings" ? "bg-grey" : ""
              }`}
            >
              <Link to={"/settings"} className="nav-link p-0 w-100">
                <SettingIcon className={"me-2"} />

                <span className="text-black" >Setting</span>
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
                className={`nav-item m-0 p-0  p-md-2 ${
                  location.pathname === "/community" ? "bg-grey" : ""
                }`}
              >
                <Link to={"/community"} className="nav-link p-0 w-100">
                  <CommunityIcon className={"me-2"} />

                  <span className="text-black">Community</span>
                </Link>
              </li> 
              <li
                className={`nav-item m-0 p-0  p-md-2 ${
                  location.pathname === "/tutorial" ? "bg-grey" : ""
                }`}
              >
                <Link to={"/tutorial"} className="nav-link p-0 w-100">
                  <TutoIcon className={"me-2"} />

                  <span className="text-black">Tutorial</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center d-none d-md-block">
        <button
          className="rounded-circle border-0 bg-grey p-2 text-white"
          
          onClick={handleSidebar}
        ><BarIcon /></button>
      </div>
      
      </div>
    </nav>
  );
};

export default Sidebar;
