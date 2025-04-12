import React from "react";
import "../../App.css";

import image1 from "../../assets/slider-1.webp";
import image2 from "../../assets/slider-2.webp";
import image3 from "../../assets/slider-3.webp";
import image4 from "../../assets/slider-4.webp";

function Stories() {
  return (
    <section className="slider mb-5 pb-5" style={{backgroundColor:"#F2F4F8"}}>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <h2 className="slider-heading text-center mt-5 p-5 text-danger fw-bold fs-1">Success stories from 1mdm.com sellers</h2>
        <br /><br />
        <div className="carousel-inner carouselinner">
          <div className="carousel-item active">
            <div className="container slider-content">
              <div className="row align-items-center">
                <div className="col-md-5 slider-left">
                  <i className="bi bi-quote" style={{color:"#f00", fontSize:"40px"}}></i>
                  <p className="paraStories">
                    Mr David runs a manufacturing company that works in this
                    field of medical devices. With administrative and production
                    across the country. With full respect for environment and
                    several years’ experience using IP systems that are
                    conventional
                  </p>
                </div>
                <div className="col-md-7 slider-right">
                  <img src={image1} className="img-fluid" alt="1mdm-product" style={{borderRadius:"20px"}} />
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container slider-content">
              <div className="row align-items-center">
                <div className="col-md-5 slider-left">
                  <i className="bi bi-quote" style={{color:"#f00", fontSize:"40px"}}></i>
                  <p className="paraStories">
                    Lab Evolution is an import - export company of reagents and
                    laboratory equipment established over a decade. Our
                    company’s team of experts (in the instrumentations and
                    reagents market) carefully follows customers all over the
                    world. Lab Evolution is able to offer all the most
                    competitive and popular brands and the best quality products
                    for your laboratory.
                  </p>
                </div>
                <div className="col-md-7 slider-right">
                  <img src={image2} className="img-fluid" alt="1mdm-product" style={{borderRadius:"20px"}}/>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container slider-content">
              <div className="row align-items-center">
                <div className="col-md-5 slider-left">
                  <i className="bi bi-quote" style={{color:"#f00", fontSize:"40px"}}></i>
                  <p className="paraStories">
                    Rupesh Kanna found himself in between jobs in 2016. He
                    started a blog, and wrote about his past experience as a lab
                    technician while sharing his knowledge on imaging
                    techniques. Kanna wanted to see more diversity in the
                    medical devices industry and specilised high-quality
                    pigmented imaging process, so he decided to create his own
                    product line
                  </p>
                </div>
                <div className="col-md-7 slider-right">
                  <img src={image3} className="img-fluid" alt="1mdm-product" style={{borderRadius:"20px"}} />
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container slider-content">
              <div className="row align-items-center">
                <div className="col-md-5 slider-left">
                  <i className="bi bi-quote" style={{color:"#f00", fontSize:"40px"}}></i>
                  <p className="paraStories">
                    LTA International Global Services LLC is a Florida-based
                    export management company that sells top Medical device
                    products from major US brands to importers and distributors
                    around the globe. Founded in 1994 by Loyd, LTA's
                    long-standing expertise in logistics and pricing has made it
                    one of the most successful international trade businesses in
                    the USA.
                  </p>
                </div>
                <div className="col-md-7 slider-right">
                  <img src={image4} className="img-fluid" alt="1mdm-product"  style={{borderRadius:"20px"}}/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <i
            style={{ fontSize: "30px" }}
            className="bi bi-arrow-left-circle-fill arrow"
          ></i>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <i
            style={{ fontSize: "30px" }}
            className="bi bi-arrow-right-circle-fill arrow"
          ></i>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Stories;
