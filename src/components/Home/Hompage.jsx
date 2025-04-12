import React from "react";
import Hero from "./Hero";
import Navbar from "../Navbar";
import Explorer from "./Explorer";
import Banner from "./Banner";
import Stories from "./Stories";
import DetailsData from "./DetailsData";
import CTA from "./CTA";
import Footer from "../Footer";

function Homepage(){
    return(
        <>
        <Navbar />
        <Hero />
        <Explorer />
        <Banner />
        <DetailsData />
        <Stories />
        <CTA />
        <Footer />
        </>
    )
}

export default Homepage;