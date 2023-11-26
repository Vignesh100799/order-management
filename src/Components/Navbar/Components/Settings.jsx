import React from 'react'
import Sidebar from '../Sidebar'
import TobBar from '../TobBar'
const Settings = () => {
  return (
    <div id="page-top">
    <div id="wrapper">
    <Sidebar />
    <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TobBar />

            
          </div>
        </div>
     
</div>
</div>
  )
}

export default Settings