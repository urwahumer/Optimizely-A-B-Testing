import React, { useContext } from "react";
import "../../Style/Product_detail.scss";
import { Cart_context } from "../../Pages/CartContext";

const Product_detail = props => {
  const [CartItem, setCartItem] = useContext(Cart_context);
  console.log("data from parent", props.data.imageUrl);
  return (
    <div className="container">
      <div className="product_detail_card">
        <div className="container-fliud">
          <div className="wrapper row">
            <div className="preview col-md-6">
              <div className="preview-pic tab-content">
                <div
                  className="tab-pane active"
                  id="pic-1"
                  style={{ height: "500px" }}
                >
                  <img src={props.data.imageUrl} />
                </div>
                <div className="tab-pane" id="pic-2">
                  <img src={props.data.imageUrl} />
                </div>
                <div className="tab-pane" id="pic-3">
                  <img src={props.data.imageUrl} />
                </div>
                <div className="tab-pane" id="pic-4">
                  <img src={props.data.imageUrl} />
                </div>
                <div className="tab-pane" id="pic-5">
                  <img src={props.data.imageUrl} />
                </div>
              </div>
              <ul className="preview-thumbnail nav nav-tabs">
                <li className="active">
                  <a data-target="#pic-1" data-toggle="tab">
                    <img src={props.data.imageUrl} />
                  </a>
                </li>
                <li>
                  <a data-target="#pic-2" data-toggle="tab">
                    <img src={props.data.imageUrl} />
                  </a>
                </li>
                <li>
                  <a data-target="#pic-3" data-toggle="tab">
                    <img src={props.data.imageUrl} />
                  </a>
                </li>
                <li>
                  <a data-target="#pic-4" data-toggle="tab">
                    <img src={props.data.imageUrl} />
                  </a>
                </li>
                <li>
                  <a data-target="#pic-5" data-toggle="tab">
                    <img src={props.data.imageUrl} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="details col-md-6">
              <h3 className="product-title">{props.data.name}</h3>
              <div className="rating">
                <div className="stars">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
                <span className="review-no">{props.data.review}</span>
              </div>
              <p className="product-description">{props.data.content}</p>
              <h4 className="price">
                current price: <span>${props.data.price}</span>
              </h4>
              <p className="vote">
                <strong>91%</strong> of buyers enjoyed this product!{" "}
                <strong>(87 votes)</strong>
              </p>
              <h5 className="sizes">
                sizes:
                <span className="size" data-toggle="tooltip" title="small">
                  s
                </span>
                <span className="size" data-toggle="tooltip" title="medium">
                  m
                </span>
                <span className="size" data-toggle="tooltip" title="large">
                  l
                </span>
                <span className="size" data-toggle="tooltip" title="xtra large">
                  xl
                </span>
              </h5>
              <h5 className="colors">
                colors:
                <span
                  className="color orange not-available"
                  data-toggle="tooltip"
                  title="Not In store"
                ></span>
                <span className="color green"></span>
                <span className="color blue"></span>
              </h5>
              <div
                className="action"
                onClick={() => {
                  setCartItem(curr => [...curr, props.data]);
                }}
              >
                <button
                  className="btn brtn-primary btn-add-to-cart "
                  type="button"
                >
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_detail;
