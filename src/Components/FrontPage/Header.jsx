import React from 'react'

const Header = () => {
  return (
<header className="bg-orange py-5">
  <div className="container px-5">
    <div className="row gx-5 justify-content-center">
      <div className="col-lg-6">
        <div className="text-center my-5">
          <h1 className="display-5 fw-bolder text-white mb-2">Welcome to My Awesome Business</h1>
          <p className="lead text-white-50 mb-4">Transform your ideas into reality. We provide innovative solutions to elevate your business to new heights.</p>
          <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
            <a className="btn btn-success btn-lg px-4 me-sm-3" href="#features">Get Started</a>
            <a className="btn btn-outline-light btn-lg px-4" href="#!">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>


  )
}

export default Header