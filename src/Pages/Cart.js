import React from "react";
import Navbar from "../Components/Basic-Component/Navbar";
import Cart_checkout from "../Components/Basic-Component/Cart_Checkout";
import Footer from "../Components/Basic-Component/Footer";
const Cart = props => {
  return (
    <>
      <Navbar />
      <Cart_checkout />
      <Footer />
    </>
  );
};

export default Cart;
