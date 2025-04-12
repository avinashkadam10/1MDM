import React, { useState, useEffect } from "react";
import "../../App.css";

function Hero() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    if (count < 26000000) {
      const timer = setTimeout(() => {
        setCount(prev => prev + 100000);
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [count]);

  useEffect(() => {
    if (count1 < 400000) {
      const timer = setTimeout(() => {
        setCount1(prev => prev + 2000);
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [count1]);

  useEffect(() => {
    if (count2 < 200) {
      const timer = setTimeout(() => {
        setCount2(prev => prev + 1);
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [count2]);

  return (
    <div className="hero py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
            <p className="para fs-5 text-primary">Sell on 1mdm.com</p>
            <h1 className="fw-bold mb-4">
              Reach millions of B2B <br /> buyers globally
            </h1>
            <div className="d-flex flex-column flex-md-row gap-3">
              <button className="btn btn-danger px-4">Start selling</button>
              <button className="btn btn-outline-primary px-4">
                Chat with consultant
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-12 col-md-6 text-center text-md-start mt-4 mt-md-0">
            <p className="para fs-3 fw-bold text-success">{count.toLocaleString()}</p>
            <p className="mb-4">Active buyers globally</p>

            <p className="para fs-3 fw-bold text-success">{count1.toLocaleString()}</p>
            <p className="mb-4">Product inquiries daily</p>

            <p className="para fs-3 fw-bold text-success">{count2}</p>
            <p>Countries and regions represented</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
