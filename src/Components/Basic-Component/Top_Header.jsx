import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import Login_Modal from "./Login_Modal";
const Top_Header = () => {
  return (
    <div className="container-fluid border-bottom  ">
      <Row className="pt-2 d-flex justify-content-center text-center">
        <Col xs="2" className="border-right hidden">
          <Link to="/Contactus" className="top_header_text ">
            <p className="">
              <i class="far fa-envelope">&nbsp;</i>
              support@ciyashop.com
            </p>
          </Link>
        </Col>
        <Col xs="2" className="border-right hidden">
          <Link to="/Contactus" className="top_header_text ">
            <p className="top_header_text">
              <i class="fas fa-phone-alt">&nbsp;</i>
              126-632-2345
            </p>
          </Link>
        </Col>
        <Col md="3" className="border-right hidden"></Col>

        <Col md="2" xs="6" className="border-right">
          <p className="top_header_text">My Account</p>
        </Col>
        <Col md="1" xs="6">
          <p className="top_header_text">
            <i className="fas fa-sign-in-alt">&nbsp; </i>
            Signin
          </p>
        </Col>
        <Col xs="2" className="border-left hidden">
          <span className="ml-4 top_header_text">
            <i className="fab fa-facebook-f mr-3"></i>
            <i className="fab fa-twitter mr-3"></i>
            <i className="fab fa-google-plus-g mr-3 "></i>
            <i className="fab fa-vimeo-v mr-3"></i>
            <i className="fab fa-pinterest-p"></i>
          </span>
        </Col>
      </Row>
    </div>
  );
};

export default Top_Header;
