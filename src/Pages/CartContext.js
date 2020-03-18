import React, { useState } from "react";
export const Cart_context = React.createContext();

export const CartProvider = props => {
  const [CartItem, setCartItem] = useState([]);
  console.log(CartItem);
  return (
    <div>
      <Cart_context.Provider value={[CartItem, setCartItem]}>
        {props.children}
      </Cart_context.Provider>
    </div>
  );
};
