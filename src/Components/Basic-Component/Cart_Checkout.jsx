import React, { useContext, useState, useEffect } from "react";
import { Cart_context } from "../../Pages/CartContext";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import Cart_Product_List from "./Cart_Product_list";

import "../../Style/Cart_Checkout.scss";

const Cart_checkout = props => {
  const [CartItem, setCartItem] = useContext(Cart_context);
  const [quantity, setquantity] = useState(1);

  var allDataArray = CartItem.map((Items, index) => {
    return (
      <tr>
        <td data-th="Product">
          <div className="row">
            <div className="col-sm-2 hidden-xs item">
              <img src={Items.imageUrl} alt="..." className="img-cart" />
            </div>
            <div className="col-sm-10">
              <h4 className="nomargin">{Items.name}</h4>
              <p>{Items.content}</p>
            </div>
          </div>
        </td>
        <td data-th="Price">${Items.price}</td>
        <td data-th="Quantity">
          <p>{quantity}</p>
        </td>
        <td data-th="Subtotal" className="text-center">
          {Items.price}
        </td>
        <td className="actions" data-th="">
          <button
            className="btn btn-danger btn-sm"
            onClick={() => itemsDelete(Items)}
          >
            <i className="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    );
  });

  const itemsDelete = items => {
    const newList = CartItem.filter(li => li.id !== items.id);
    setCartItem(newList);
  };

  return (
    <div className="container">
      {CartItem.length === 0 && (
        <div className="alert alert-info mt-4">Cart is empty</div>
      )}
      <table id="cart" className="table table-hover table-condensed">
        <thead>
          <tr>
            <th style={{ width: "50%" }}>Product</th>
            <th style={{ width: "10%" }}>Price</th>
            <th style={{ width: "8%" }}>Quantity</th>
            <th style={{ width: "22%" }} className="text-center">
              Subtotal
            </th>
            <th style={{ width: "10%" }}></th>
          </tr>
        </thead>
        <tbody>{allDataArray} </tbody>
        <tfoot>
          <tr className="visible-xs">
            <td className="text-center">
              <strong></strong>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/">
                <a href="#" className="btn btn-warning">
                  <i className="fa fa-angle-left"></i> Continue Shopping
                </a>
              </Link>
            </td>
            <td colspan="2" className="hidden-xs"></td>
            <td className="hidden-xs text-center">
              {"$ "}
              {CartItem.map(o => o.price).reduce(
                (prev, curr) => prev + curr,
                0
              )}
            </td>
            <td>
              <a
                href="https://www.paypal.com/webapps/hermes?token=5EY097812P7754247&useraction=commit&mfid=1546377013907_cf1dec6830d7"
                className="d-flex justify-content-center cart_checkout_button"
              >
                Checkout
                <span>
                  <i className="fa fa-angle-right ml-1"></i>
                </span>
              </a>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Cart_checkout;
