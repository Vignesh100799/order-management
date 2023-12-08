import React from "react";
import Sidebar from "./Sidebar";
import TobBar from "./TobBar";
import './styles/core.css'
const Layout = ({ children }) => (
  <main id="page-top">
    <header id="wrapper">
      <Sidebar />
      <article id="content-wrapper" className="d-flex flex-column">
        <section id="content">
          <TobBar />
          <div className="container-fluid">{children}</div>
        </section>
      </article>
    </header>
  </main>
);

export default Layout;
