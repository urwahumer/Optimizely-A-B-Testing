import React, { useState, useEffect } from "react";
import Product_detail from "../Components/Basic-Component/Product_detail";
import Navbar from "../Components/Basic-Component/Navbar";
import Footer from "../Components/Basic-Component/Footer";
import axios from "axios";
const Product_description_page = props => {
  const data_of_product = props.location.dataprops.data;

  console.log(props.match.params);
  console.log("props coming ", data_of_product);

  return (
    <div>
      <Navbar />
      <Product_detail data={data_of_product} />
      <Footer />
    </div>
  );
};

export default Product_description_page;
