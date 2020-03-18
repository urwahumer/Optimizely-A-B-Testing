import React from "react";
import Navbar from "../Components/Basic-Component/Navbar";
import Carousel from "../Components/Basic-Component/Carousel";
import Footer from "../Components/Basic-Component/Footer";
import Category_box from "../Components/Basic-Component/Category_box";
import TopSelling_product from "../Components/Basic-Component/TopSelling_propduct";
import Top_Header from "../Components/Basic-Component/Top_Header";
import Subscribe from "../Components/Basic-Component/Subsrcibe";
import New_Product_Banner from "../Components/Basic-Component/New_Product_Banner";
import Full_width_section from "../Components/Basic-Component/Full_width_section";
import Shoes_Category from "../Components/Basic-Component/Shoes_Category";
import About from "../Components/Basic-Component/About";
import HomePage_Optimizely from "./HomePage_Optimizely";
import {
  createInstance,
  OptimizelyProvider,
  OptimizelyFeature,
  withOptimizely,
  OptimizelyExperiment,
  OptimizelyVariation
} from "@optimizely/react-sdk";

const Home = () => {
  return (
    <>
      <HomePage_Optimizely />
    </>
  );
};

export default Home;
