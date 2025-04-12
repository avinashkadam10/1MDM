import React, { useState } from "react";
import DetailsInfo from "./DetailsInfo";

import image1 from "../../assets/1mdm-product-1.png";
import image2 from "../../assets/1mdm-product-2.png";
import image3 from "../../assets/1mdm-product-3.png";
import image4 from "../../assets/1mdm-product-image-4.png";

const dataList = [
  {
    title: "Set up a store that showcases your brand",
    para: "Differentiate yourself from the competition with a full store dedicated to your products—no coding or design skills necessary!",
    image: image1
  },
  {
    title: "Increase exposure by up to 120% with a suite of smart advertising tools.",
    para: "Get your products placed in the right spots to be noticed by the exact audience you are targeting.",
    image: image2
  },
  {
    title: "Optimize your every move with in-depth data and customer insights",
    para: "Improve performance with dashboards detailing product exposure, click volume, spend, average cost, store visits, and more.!",
    image: image3
  },
  {
    title: "Know you’re supported throughout your journey",
    para: "From onboarding help to online chats to local support during business hours and account optimization tips -- we’re here for you",
    image: image4
  }
];

const sidebarItems = [
  "Custom storefront",
  "Advertising tools",
  "Data and analytics",
  "Customer support"
];

function DetailsData() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container py-5">
      <div className="row">
        {/* Sidebar */}
        <div className="col-12 col-md-3 mb-4 mb-md-0">
          <div className="list-group">
            {sidebarItems.map((item, index) => (
              <button
                key={index}
                className={`list-group-item list-group-item-action ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="col-12 col-md-9">
          <DetailsInfo
            productTilte={dataList[activeIndex].title}
            productPara={dataList[activeIndex].para}
            imageUrl={dataList[activeIndex].image}
          />
        </div>
      </div>
    </div>
  );
}

export default DetailsData;
