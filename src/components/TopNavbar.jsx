import React from "react";
import "../App.css";

function TopNavbar() {
  return (
    <div className="container-fluid border-bottom py-2 bg-light">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="text-muted mb-1 mb-md-0 text-center text-md-start">
          World's Largest Medical Equipment Market Place
        </p>
        <p className="mb-0 text-center text-md-end">
          My account | Contact Us
        </p>
      </div>
    </div>
  );
}

export default TopNavbar;
