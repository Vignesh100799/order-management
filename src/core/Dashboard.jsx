import React, { useState } from "react";
import Sidebar from "../Components/Navbar/Sidebar";
import TobBar from "../Components/Navbar/TobBar";
import LineChartOD from "./vendors/charts/LineChart";
import ReportCard from "./vendors/others/ReportCard";
import './vendors/style/core.css'
import PieChartOD from "./vendors/charts/PieChart";

const Dashboard = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true)

  const handleSidebar = () => {
    setSidebarToggle((prevSidebarToggle) => !prevSidebarToggle)
  }
  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
          handleSidebar={handleSidebar}
        />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TobBar
              handleSidebar={handleSidebar}
              sidebarToggle={sidebarToggle}
              setSidebarToggle={setSidebarToggle}
            />


            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                {/* <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50" /> Generate Report</a> */}
              </div>
              <div className="row">
                <ReportCard />
                <ReportCard />
                <ReportCard />
                <ReportCard />
                {/* <ReportCard />
                <ReportCard /> */}
              </div>

              <div className="row ">
                <div className="col-xl-8 col-lg-7">
                  <div className="card shadow mb-4 ">
                    <div className="card-header py-3 text-center">
                      <h6 className="m-0 font-weight-bold text-orange">Earnings Overview</h6>
                    </div>
                    <div className="card-body">
                      <div className="chart-area">
                        
                        <LineChartOD />

                      </div>
                    </div>
                  </div>
                </div>


                <div className="col-xl-4 col-lg-5">
                  <div className="card shadow mb-4">
                    
                    <div className="card-header py-3 text-center">
                      <h6 className="m-0 font-weight-bold text-orange">Revenue Sources</h6>
                    </div>
                    
                    <div className="card-body">
                      <div className="chart-pie">
                            <PieChartOD />
                      </div>
                      <div className="mt-4 text-center small">
                        <span className="mr-2">
                          <i className="fas fa-circle text-primary" /> Direct
                        </span>
                        <span className="mr-2">
                          <i className="fas fa-circle text-success" /> Social
                        </span>
                        <span className="mr-2">
                          <i className="fas fa-circle text-info" /> Referral
                        </span>
                      </div>
                    </div>
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

export default Dashboard;
