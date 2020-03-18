import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
const Filter_product = props => {
  const [data, setdata] = useState();

  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col sm="3" xs="12">
            <p>Total Results showing {data.length}</p>
          </Col>
          <Col sm="3" xs="12">
            <form className="ordering">
              <select
                name="orderby"
                className="orderby select2"
                tabindex="-1"
                aria-hidden="true"
              >
                <option value=" ">Any Price </option>
                <option value="NewProduct">Maximum</option>
                <option value="Pricehigh">Price: High to Low</option>
                <option value="Pricelow">Price: Low to High</option>
              </select>
            </form>
          </Col>
          <Col sm="3" xs="12">
            <form class="ordering">
              <select
                name="orderby"
                class="orderby select2"
                tabindex="-1"
                aria-hidden="true"
              >
                <option value="">Any Rating</option>
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
      </Container>
    </div>
  );
};

export default Filter_product;
