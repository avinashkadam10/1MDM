import React from "react";
import "../../App.css";

function CTA() {
  return (
    <div className="container-fluid bg-dark text-white py-5 mt-5" id="bannerCTA">
      <div className="container text-center">
        <h3 className="fs-3 fw-bold mb-4">
          Ready to Grow Your Business?
        </h3>
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
          <button className="btn btn-primary px-4 py-2">Start selling</button>
          <button className="btn btn-outline-light px-4 py-2">Chat with consultant</button>
        </div>
      </div>
    </div>
  );
}

export default CTA;
