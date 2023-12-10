import React, { useEffect } from "react";
import profileLogo from "../../assets/img/undraw_profile.svg";
import messageLogo1 from "../../assets/img/undraw_profile_1.svg";
import messageLogo2 from "../../assets/img/undraw_profile_2.svg";
import messageLogo3 from "../../assets/img/undraw_profile_3.svg";
import { useDispatch, useSelector } from "react-redux";
// import { setSideBarToggle, sideBarToggle } from "../../features/FunctionalReducer";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../Components/User/Auth/authService";
import "./styles/navbar.css";
import { setUser } from "../../features/UserReducer";
import { setSideBarToggle, sideBarToggle } from "../../features/FunctionalReducer";

const TobBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const sidebarToggle = useSelector((state) => state.funactionality.sideBarToggle);
  const user = useSelector(state=>state.users_info.user)


  useEffect(() => {
    dispatch(setUser(JSON.parse(localStorage.getItem("user-info"))));
  }, [dispatch]);
  const handleSidebar = () => {
    dispatch(setSideBarToggle(!sideBarToggle));
  };
  const removeSidebar = () => {
    dispatch(setSideBarToggle(sideBarToggle));
  };
  const handleLogout = () => {
    logout();
    navigate("/login");
    window.location.href = "/login";
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow px-4 ">
      {sidebarToggle ? (
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
          onClick={removeSidebar}
        >
          <i className="fa fa-bars" />
        </button>
      ) : (
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
          onClick={handleSidebar}
        >
          <i className="fa fa-bars" />
        </button>
      )}
      <h1 className="text-orange fw-bolder  d-none d-md-block">ADUDU</h1>

      {/* Topbar Navbar */}
      <ul className="navbar-nav ml-auto">
        {/* Nav Item - Alerts */}
        <li className="nav-item dropdown no-arrow mx-1">
          <a
            className="nav-link dropdown-toggle"
            href="..."
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-bell fa-fw" />
            {/* Counter - Alerts */}
            <span className="badge badge-danger badge-counter px-2">3</span>
          </a>
          {/* Dropdown - Alerts */}
          <div
            className="dropdown-list dropdown-menu dropdown-menu-end shadow animated--grow-in"
            aria-labelledby="alertsDropdown"
          >
            <h6 className="dropdown-header bg-orange border-0">
              Alerts Center
            </h6>
            <a className="dropdown-item d-flex align-items-center" href="...">
              <div className="mr-3">
                <div className="icon-circle bg-primary">
                  <i className="fas fa-file-alt text-white" />
                </div>
              </div>
              <div>
                <div className="small text-gray-500">December 12, 2019</div>
                <span className="font-weight-bold">
                  A new monthly report is ready to download!
                </span>
              </div>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="...">
              <div className="mr-3">
                <div className="icon-circle bg-success">
                  <i className="fas fa-donate text-white" />
                </div>
              </div>
              <div>
                <div className="small text-gray-500">December 7, 2019</div>
                $290.29 has been deposited into your account!
              </div>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="...">
              <div className="mr-3">
                <div className="icon-circle bg-warning">
                  <i className="fas fa-exclamation-triangle text-white" />
                </div>
              </div>
              <div>
                <div className="small text-gray-500">December 2, 2019</div>
                Spending Alert: We've noticed unusually high spending for your
                account.
              </div>
            </a>
            <a
              className="dropdown-item text-center small text-gray-500"
              href="..."
            >
              Show All Alerts
            </a>
          </div>
        </li>

        {/* Nav Item - Messages */}
        <li className="nav-item dropdown no-arrow mx-1">
          <a
            className="nav-link dropdown-toggle"
            href="..."
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-envelope fa-fw" />
            {/* Counter - Messages */}
            <span className="badge badge-danger badge-counter">7</span>
          </a>
          {/* Dropdown - Messages */}
          <div
            className="dropdown-list dropdown-menu dropdown-menu-end shadow animated--grow-in"
            aria-labelledby="messagesDropdown"
          >
            <h6 className="dropdown-header bg-orange border-0">
              Message Center
            </h6>
            <a className="dropdown-item d-flex align-items-center" href="...">
              <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src={messageLogo1} alt="..." />
                <div className="status-indicator bg-success" />
              </div>
              <div className="font-weight-bold">
                <div className="text-truncate">
                  Hi there! I am wondering if you can help me with a problem
                  I've been having.
                </div>
                <div className="small text-gray-500">Emily Fowler · 58m</div>
              </div>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="...">
              <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src={messageLogo2} alt="..." />
                <div className="status-indicator" />
              </div>
              <div>
                <div className="text-truncate">
                  I have the photos that you ordered last month, how would you
                  like them sent to you?
                </div>
                <div className="small text-gray-500">Jae Chun · 1d</div>
              </div>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="...">
              <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src={messageLogo3} alt="..." />
                <div className="status-indicator bg-warning" />
              </div>
              <div>
                <div className="text-truncate">
                  Last month's report looks great, I am very happy with the
                  progress so far, keep up the good work!
                </div>
                <div className="small text-gray-500">Morgan Alvarez · 2d</div>
              </div>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="...">
              <div className="dropdown-list-image mr-3">
                <img
                  className="rounded-circle"
                  src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                  alt="..."
                />
                <div className="status-indicator bg-success" />
              </div>
              <div>
                <div className="text-truncate">
                  Am I a good boy? The reason I ask is because someone told me
                  that people say this to all dogs, even if they aren't good...
                </div>
                <div className="small text-gray-500">Chicken the Dog · 2w</div>
              </div>
            </a>
            <a
              className="dropdown-item text-center small text-gray-500"
              href="..."
            >
              Read More Messages
            </a>
          </div>
        </li>
        <div className="topbar-divider d-none d-sm-block"></div>

        {/* Nav Item - User Information */}
        <li className="nav-item dropdown no-arrow">
          <a
            className="nav-link dropdown-toggle"
            href="..."
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              {user.firstname}
            </span>
            <img
              className="img-profile rounded-circle"
              src={profileLogo}
              alt="profile"
            />
          </a>
          {/* Dropdown - User Information */}
          <div
            className="dropdown-menu dropdown-menu-end me-2 shadow animated--grow-in "
            aria-labelledby="userDropdown"
          >
            <Link className="dropdown-item" to={"/settings"}>
              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
              Profile
            </Link>

            <div className="dropdown-divider" />
            <Link className="dropdown-item" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
              Logout
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default TobBar;
