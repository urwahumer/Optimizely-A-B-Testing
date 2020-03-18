import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Cart_context } from "../../Pages/CartContext";
import Filter_product from "./Filter_product";

import {
  Container,
  Col,
  Row,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

import axios from "axios";
const Mens_product = props => {
  const [productdata, setproductdata] = useState([]);
  const [rating, setrating] = useState(101);
  const [CartItem, setCartItem] = useContext(Cart_context);

  const onChange = e => {
    setrating(e.target.value);
  };

  /* Fetching Data from api */
  useEffect(() => {
    axios.get("http://localhost:3333/Product").then(result => {
      setproductdata(result.data);
    });
  }, []);

  const newArr = productdata.map(data => {
    const round = Math.round(data.rate);

    if (round == rating) {
      return (
        <div className="col-md-3 col-sm-5  col-12 mb-3 ">
          <a href="#" class="product-item md-height bg-gray d-block">
            <Link
              to={{
                pathname: `/Product_description_page/${data.id}`,
                dataprops: { data }
              }}
            >
              <div className="top_selling_product_card">
                <div className="broken_Image">
                  <img
                    width="100%"
                    src={data.imageUrl}
                    alt="Card image cap"
                    class="img-fluid top_selling_product_card"
                  />
                </div>
              </div>
            </Link>
          </a>
          <p class="item-title mt-4">
            <a href="#">{data.name}</a>
          </p>
          <strong class="item-price mt-1">{data.price}</strong>

          <div class="star-rating mt-2 d-flex justify-content-between">
            <span>
              <span class="text-warning">
                <i class="fas fa-star"></i>
              </span>
              <span class="text-warning">
                <i class="fas fa-star"></i>
              </span>
              <span class="text-warning">
                <i class="fas fa-star"></i>
              </span>
              <span class="text-warning">
                <i class="fas fa-star"></i>
              </span>
              <span class="text-warning">
                <i class="fas fa-star"></i>
              </span>
            </span>
            <span className="d-flex justify-content-end">
              <Button
                className="btn brtn-primary btn-add-to-cart"
                onClick={() => {
                  setCartItem(curr => [...curr, data]);
                }}
              >
                Add to cart
              </Button>
            </span>
          </div>
        </div>
      );
    } else if (data.subCategoryId == rating) {
      return (
        <>
          {" "}
          <div className="col-md-3 col-sm-5  col-12 mb-3 ">
            <a href="#" class="product-item md-height bg-gray d-block">
              <Link
                to={{
                  pathname: `/Product_description_page/${data.id}`,
                  dataprops: { data }
                }}
              >
                {" "}
                <div className="top_selling_product_card">
                  <div className="broken_Image">
                    <img
                      width="100%"
                      src={data.imageUrl}
                      alt="Card image cap"
                      class="img-fluid top_selling_product_card"
                    />
                  </div>
                </div>
              </Link>
            </a>
            <h6 class="item-title mt-4">
              <a href="#">{data.name}</a>
            </h6>
            <strong class="item-price mt-1">{data.price}</strong>

            <div class="star-rating mt-2 d-flex justify-content-between">
              <span>
                <span class="text-warning">
                  <i class="fas fa-star"></i>
                </span>
                <span class="text-warning">
                  <i class="fas fa-star"></i>
                </span>
                <span class="text-warning">
                  <i class="fas fa-star"></i>
                </span>
                <span class="text-warning">
                  <i class="fas fa-star"></i>
                </span>
                <span class="text-warning">
                  <i class="fas fa-star"></i>
                </span>
              </span>
              <span className=" ">
                <Button
                  className="btn brtn-primary btn-add-to-cart "
                  onClick={() => {
                    setCartItem(curr => [...curr, data]);
                  }}
                >
                  Add to cart
                </Button>
              </span>
            </div>
          </div>
        </>
      );
    }
  });

  useEffect(newArr => {}, [rating]);

  return (
    <div>
      <Container>
        <div className="mt-5">
          <Row>
            <Col sm="3" xs="12">
              <p>Total Results showing {newArr.length}</p>
            </Col>

            <Col sm="3" xs="12">
              <form>
                <select
                  name="orderby"
                  class="orderby select2 chosen-select-no-single"
                  tabindex="-1"
                  aria-hidden="true"
                  onChange={onChange}
                >
                  <option value="101">Any Rating</option>
                  <option value="5">5 Star</option>
                  <option value="4">4 Star</option>
                  <option value="3">3 Star</option>
                  <option value="2">2 Star</option>
                  <option value="1">1 Star</option>
                </select>
              </form>
            </Col>
            <Col sm="3" xs="12"></Col>
          </Row>
        </div>
        <Row className="mt-5 mb-5">{newArr}</Row>
      </Container>
    </div>
  );
};

export default Mens_product;
