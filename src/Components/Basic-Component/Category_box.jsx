import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import women_Category from "../../Assets/Images/women_Category.jpg";
import Men from "../../Assets/Images/Mens_Category.png";
import kids from "../../Assets/Images/Kids_Category.jpg";

const Category_box = () => {
  return (
    <Container className="mt-5 mb-5 ">
      <Row className="category_box">
        <Col className="text-right mb-4 seasonEndSale  ">
          <div className="section-title text-md-right ">
            <h2 className="title text-right font-weight-bold">
              {" "}
              End of Season
            </h2>
            <p className="text-Size">
              Avail massive discounts and get exciting offers with our shopping
              across all new arrival categories
            </p>
            <div className="border-space"></div>
          </div>

          <div>
            <Button href="/shop" className="btn brtn-primary btn-add-to-cart">
              {" "}
              Shop Now{" "}
            </Button>
          </div>
        </Col>
        <Col md="3" sm="4" xs="4">
          <Link to="/Women">
            <div className="card_category">
              <img
                src={women_Category}
                className="img-fluid view img_categroy_size "
                alt="season-img1"
              />
              <div className="mask ">
                <p className="text-white font-weight-bold">--Women</p>
              </div>
            </div>
          </Link>
        </Col>
        <Col md="3" sm="4" xs="4">
          <div className="card_category">
            <img
              src={kids}
              className="img-fluid view  img_categroy_size"
              alt="season-img1"
            />
            <div className="mask ">
              <p className=" font-weight-bold text-white">--Kids</p>
            </div>
          </div>
        </Col>
        <Col md="3" sm="4" xs="4">
          <Link to="/Men">
            <div className="card_category">
              <img
                src={Men}
                className="img-fluid view img_categroy_size"
                alt="season-img1"
              />
              <div className="mask ">
                <p className=" font-weight-bold text-white">--Men</p>
              </div>
            </div>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Category_box;
