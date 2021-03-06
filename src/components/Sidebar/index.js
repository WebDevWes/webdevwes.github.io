import React from "react";
import "./style.css";

export default function Sidebar() {
  const toggleCollapse = (event) => {
    const element = document.querySelector(event.target.getAttribute("goTo"));

    document.getElementById("navbarSupportedContent").classList.remove("show");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light sidebar-background fixed-top"
      id="sideNav"
    >
      <div className="navbar-brand">
        <span className="d-block d-lg-none font-black">WebDevWes</span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src={process.env.PUBLIC_URL + "/images/profilePic.jpg"}
            alt="Profile"
          />
        </span>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <p
              className="nav-link font-black"
              goto="#about"
              onClick={toggleCollapse}
            >
              About
            </p>
          </li>
          <li className="nav-item">
            <p
              className="nav-link font-black"
              goto="#interest"
              onClick={toggleCollapse}
            >
              Interest
            </p>
          </li>
          <li className="nav-item">
            <p
              className="nav-link font-black"
              goto="#skills"
              onClick={toggleCollapse}
            >
              Skills
            </p>
          </li>
          {/* <li className="nav-item">
              <a className="nav-link font-black" goTo="#certification" onClick={toggleCollapse}>
                Certifications
              </a>
            </li> */}
          <li className="nav-item">
            <p
              className="nav-link font-black"
              goto="#projects"
              onClick={toggleCollapse}
            >
              Projects
            </p>
          </li>
          <li className="nav-item">
            <p
              className="nav-link font-black"
              goto="#contact"
              onClick={toggleCollapse}
            >
              Contact Me
            </p>
          </li>
        </ul>
      </div>
    </nav>
  );
}
