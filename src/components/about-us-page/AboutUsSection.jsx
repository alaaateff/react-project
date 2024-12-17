import React from 'react';
import './style.css'
function AboutSection() {
  return (
    <section className="first-sec-main p-3">
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className="row">
          <div className="col-sm-12">
            <h1>About us</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-auto">
            <span><a href="./index.html" className="home-text text-decoration-none"> Home </a> / </span>
          </div>
          <div className="col-auto m-0 p-0">
            <p className="about-us-text">About us</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
