import React from "react";
import "../App.css";

import logo from "../assets/logo-white.png";

function Footer() {
  return (
    <>
      <div className="container-fluid" style={{backgroundColor:"#000", height:"300px"}}>
        <div className="row pt-5">
          <div className="col-3">
            <img src={logo} alt="" />
            <p className="pt-5">One Medical Devices
            Market Place</p>

          </div>
          <div className="col-3 list">
            <p>Platform</p>
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
          <div className="col-3 list">
          <p>Press Room</p>
            <div>
              <a href="#">Images B-roll</a><br />
            </div>
          <p>Polices</p>
            <div>
              <a href="#">Terms of Service</a><br />
              <a href="#">Privacy Policy</a><br />
              <a href="#">Delivery Information</a><br />
            </div>
          </div>
          <div className="col-3 list">
          <p>Reach us</p>
            <div>
              <a href="#">Corporate Information</a><br />
              <a href="#">Contact us</a><br />
            </div>
          </div>
        </div>
        
      </div>
      <div style={{backgroundColor:"#fff", padding:"20px"}} className="row">
          <p className="text-center">© 2025 One Medical Devices. All rights reserved.</p>
        </div>
    </>
  );
}

export default Footer;
