import React from "react";
import "../../App.css";

function CTA() {
  return (
    <>
      <div className="container-fluid" id="bannerCTA">
        <h3 className="text-center fs-3 fw-bold text-white pt-5 mt-5">
          Ready to Grow Your Business?
        </h3>
        <div className="text-center mt-4 mb-5">
          <button className="btnCTA" >Start selling</button>
          <button className="btn1CTA">Chat with consultant</button>
        </div>
      </div>
    </>
  );
}

export default CTA;
