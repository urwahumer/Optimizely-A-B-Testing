import React from "react";
import Navbar from "../Components/Basic-Component/Navbar";
import Mens_product from "../Components/Basic-Component/Mens_product";
import Women_Product from "../Components/Basic-Component/Women_Product";
import Footer from "../Components/Basic-Component/Footer";
import NewsLetter_Subsription from "../Components/Basic-Component/NewsLetter_Subsription";
const Women = () => {
  return (
    <>
      <Navbar />
      <Women_Product />
      <Mens_product />
      <NewsLetter_Subsription />
      <Footer />
    </>
  );
};

export default Women;
