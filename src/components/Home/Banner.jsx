import React from "react";

function Banner() {
  return (
    <div
      className="container-fluid bg-danger text-white d-flex flex-column justify-content-center align-items-center text-center py-5 mt-5 mb-5"
      style={{ minHeight: "300px" }}
    >
      <div className="container px-3">
        <h2 className="fw-bold fs-2 fs-md-1">
          Largest number of products & categories of <br className="d-none d-md-block" />
          medical devices on a single place - 1mdm.com
        </h2>
        <p className="fs-5 mt-3">
          Connect with buyers worldwide for your product & start selling now.
        </p>
      </div>
    </div>
  );
}

export default Banner;
