import React from 'react'
import Sidebar from '../Components/Navbar/Sidebar'
import TobBar from '../Components/Navbar/TobBar'
const Settings = () => {
  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TobBar />
            <div className="container-fluid">           
              <div className="row justify-content-center">
                <div className="col-6">
                <div className="card shadow mb-4 ">
                    <div className="card-header py-3 text-center">
                      <h4 className="m-0 font-weight-bold text-orange">Settings</h4>
                    </div>
                    <div className="card-body">
                      
                        
                        

                      
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Settings