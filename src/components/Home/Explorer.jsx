import React from "react";
import "../../App.css";

function Explorer() {
  return (
    <>
      <div className="container">
        <h1 className="mt-5 mb-5 text-center p-3 fw-bold">
          1mdm.com is a leading ecommerce platform that helps SMEs go global
        </h1>
        <div className="row">
          <div className="col-6">
            <iframe
              width="500"
              height="270"
              src="https://www.youtube.com/embed/TN7iJyc5Uks"
            ></iframe>
            ;
          </div>
          <div className="col-6">
            <p className="mb-5">
              Connect with millions of business buyers from around the world.
            </p>
            <p className="mb-5">
              Get the tools and know-how to build a successful ecommerce
              presence for your business.
            </p>
            <p className="mb-5">
              Pocket more from each sale, with take rates as low as 0% in some
              cases.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explorer;
