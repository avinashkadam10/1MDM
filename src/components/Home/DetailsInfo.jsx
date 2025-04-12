import React from "react";

function DetailsInfo({ productTilte, productPara, imageUrl }) {
    return (
        <div className="container py-5">
            <div className="row align-items-center">
                {/* Text Content */}
                <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                    <h2 className="fw-bold" style={{ fontSize: "32px", wordSpacing: "2px" }}>
                        {productTilte}
                    </h2>
                    <p className="text-dark">{productPara}</p>
                </div>

                {/* Image */}
                <div className="col-12 col-lg-6 text-center">
                    <img
                        src={imageUrl}
                        alt="product"
                        className="img-fluid"
                        style={{ maxWidth: "90%" }}
                    />
                </div>
            </div>
        </div>
    );
}

export default DetailsInfo;
