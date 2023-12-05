import React, { useEffect } from "react";
import Logo from "../vendors/Icons/Logo";
import BarIcon from "../vendors/Icons/BarIcon";
import DashIcon from "../vendors/Icons/DashIcon";
import OrdeIcon from "../vendors/Icons/OrdeIcon";
import ListIcon from "../vendors/Icons/ListIcon";
import AdminIcon from "../vendors/Icons/AdminIcon";
import SettingIcon from "../vendors/Icons/SettingIcon";
import CommunityIcon from "../vendors/Icons/CommunityIcon";
import TutoIcon from "../vendors/Icons/TutoIcon";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSideBarToggle } from "../../features/UserReducer";
import './styles/navbar.css'
const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const sideBarToggle = useSelector((state) => state.order_list.sideBarToggle);

  const handleSidebar = () => {
    dispatch(setSideBarToggle(!sideBarToggle));
  };

  let sidebarClasses = "";
  sidebarClasses += sideBarToggle
    ? "navbar-nav  sidebar accordion "
    : "navbar-nav sidebar accordion toggled ";

  useEffect(() => {
    window.addEventListener("resize", function () {
      if (window.innerWidth < 496) {
        setSideBarToggle(true);
      } else {
        setSideBarToggle(false);
      }
    });
  }, []);
  const navItems = [
    { path: "/dashboard", icon: <DashIcon />, text: "Dashboard" },
    { path: "/order", icon: <OrdeIcon />, text: "Order" },
    { path: "/listing", icon: <ListIcon />, text: "Listing" },
    { path: "/admin", icon: <AdminIcon />, text: "Admin" },
    { path: "/settings", icon: <SettingIcon />, text: "Setting" },
  ];

  const linkItems = [
    { path: "/community", icon: <CommunityIcon />, text: "Community" },
    { path: "/tutorial", icon: <TutoIcon />, text: "Support" },
  ];
  return (
    <nav
      className={sidebarClasses}
      id="accordionSidebar"
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
            className="border-0 "
            style={{ background: "none" }}
            onClick={handleSidebar}
          >
            <BarIcon />
          </button>
        </div>
      </div>
      <div></div>
      <div>
      <div className="mx-3">
        <ul className="navbar-nav me-auto mb-2 mb-lg-2" style={{ cursor: "pointer" }}>
          {[...navItems, ...linkItems].map((item) => (
            <li
              key={item.path}
              className={`nav-item m-0 p-0 bg-grey-h p-md-2 py-sm-3 ${location.pathname === item.path ? "bg-grey" : ""} ${sideBarToggle ? "" : "mt-4"}`}
              
            >
              <Link to={item.path} className="nav-link p-0 w-100">
                {item.icon}
                <span className={`text-black ml-2 ${sideBarToggle ? "" : "d-none"}`}>
                  {item.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

        <div className="text-center d-none d-md-block">
   
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;