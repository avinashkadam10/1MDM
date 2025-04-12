import React from "react";
import "../../App.css";

function Explorer() {
  return (
    <div className="container my-5">
      <h1 className="text-center fw-bold mb-5 px-3">
        1mdm.com is a leading ecommerce platform that helps SMEs go global
      </h1>

      <div className="row align-items-center">
        {/* Video Section */}
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/TN7iJyc5Uks"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Text Content */}
        <div className="col-12 col-md-6">
          <p className="mb-4">
            Connect with millions of business buyers from around the world.
          </p>
          <p className="mb-4">
            Get the tools and know-how to build a successful ecommerce
            presence for your business.
          </p>
          <p className="mb-4">
            Pocket more from each sale, with take rates as low as 0% in some
            cases.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Explorer;
