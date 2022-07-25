/** @format */

import React from "react";
import Banner from "../Banner/Banner";
import Product from "../Product/Product";
import Contact from "./Contact";
import BusinessSummery from "./BusinessSummery";
import AboutCompnay from "./AboutCompnay";
import Review from "./Review/Review";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Product></Product>
      <AboutCompnay></AboutCompnay>
      <BusinessSummery></BusinessSummery>
      <Review></Review>
      <Contact></Contact>
    </div>
  );
};

export default Home;
