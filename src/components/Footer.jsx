import React from "react";
import "../App.css";
import logo from "../assets/logo-white.png";

function Footer() {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#000", color: "#fff", padding: "40px 20px" }}>
        <div className="row">
          <div className="col-12 col-md-3 mb-4">
            <img src={logo} alt="Logo" className="img-fluid" />
            <p className="pt-3">One Medical Devices<br />Market Place</p>
          </div>

          <div className="col-12 col-md-3 mb-4 list">
            <p><strong>Platform</strong></p>
            <div>
              <a href="#">Sell on 1MDM</a><br />
              <a href="#">Pricing</a><br />
              <a href="#">About Us</a><br />
              <a href="#">Our Story</a><br />
              <a href="#">Careers</a><br />
              <a href="#">Blog</a><br />
              <a href="#">Brands</a><br />
            </div>
          </div>

          <div className="col-12 col-md-3 mb-4 list">
            <p><strong>Press Room</strong></p>
            <div>
              <a href="#">Images B-roll</a><br />
            </div>
            <p className="mt-3"><strong>Policies</strong></p>
            <div>
              <a href="#">Terms of Service</a><br />
              <a href="#">Privacy Policy</a><br />
              <a href="#">Delivery Information</a><br />
            </div>
          </div>

          <div className="col-12 col-md-3 mb-4 list">
            <p><strong>Reach us</strong></p>
            <div>
              <a href="#">Corporate Information</a><br />
              <a href="#">Contact us</a><br />
            </div>
          </div>
        </div>
      </div>

      <div className="row text-center m-0" style={{ backgroundColor: "#fff", padding: "20px" }}>
        <p className="m-0">© 2025 One Medical Devices. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;
