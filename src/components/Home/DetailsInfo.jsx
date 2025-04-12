import React from "react";

function DetailsInfo({ productTilte, productPara, imageUrl }) {
    return (
        <div className="container" style={{height:"300px"}}>
            <div className="row">
                <div className="col-2">
                </div>
                <div className="col-6">
                    <p style={{fontSize:"32px", fontWeight:700, marginTop:"16px", wordSpacing:"2px"}}>{productTilte}</p>
                    <p style={{color:"#000"}}>{productPara}</p>
                </div>
                <div className="col-4">
                    <img src={imageUrl} alt="product" style={{ width: "90%" }} />
                </div>
            </div>
        </div>
    );
}

export default DetailsInfo;
