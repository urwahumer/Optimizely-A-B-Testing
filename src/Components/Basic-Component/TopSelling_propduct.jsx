import React from "react";
import women_Category from "../../Assets/Images/women_Category.jpg";
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

const TopSelling_propduct = props => {
  return (
    <Container>
      <h3 className="text-center font-weight-bold">Best Selling Product</h3>
      <p className="text-center">
        Forget about struggling to do everything at once: taking care of the
        family, Running your business etc.
      </p>
      <Row className="mt-5 mb-5">
        {/* <div md="4" className="col-md-3  col-12 mb-3">
          <div className="">
            <Card>
              <CardImg
                className="img-fluid  top_selling_product_card"
                top
                src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Card image cap"
              />
              <CardBody>
                <CardSubtitle>OFF WHITE X Nike Air Force </CardSubtitle>
                <CardSubtitle>
                  <h4 className="mt-2">$100</h4>
                </CardSubtitle>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="col-md-3  col-12 mb-3">
          <div>
            <Card>
              <CardImg
                className="img-fluid top_selling_product_card"
                top
                width="100%"
                src="https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Card image cap"
              />
              <CardBody>
                <CardSubtitle>OFF WHITE X Nike Air Force </CardSubtitle>
                <CardSubtitle>
                  <h4 className="mt-2">$100</h4>
                </CardSubtitle>
              </CardBody>
            </Card>
          </div>
        </div> */}

        <div className="col-md-3 col-sm-5  col-12 mb-3 neo_card ">
          <span class="notify-badge4">50%</span>
          <a href="#" class="product-item md-height bg-gray d-block">
            <img
              src="images/model_5.png"
              width="100%"
              src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Card image cap"
              class="img-fluid top_selling_product_card img1"
            />
          </a>
          <h6 class="item-title mt-4">
            <a href="#">OFF WHITE X Nike Air Force</a>
          </h6>
          <strong class="item-price mt-1">
            <del className="text-muted">$120</del> $100
          </strong>

          <div class="star-rating mt-2">
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
          </div>
        </div>
        <div className="col-md-3 col-sm-5  col-12 mb-3 neo_card">
          <span class="notify-badge4">50%</span>
          <a href="#" class="product-item md-height bg-gray d-block">
            <img
              src="images/model_5.png"
              width="100%"
              src="https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Card image cap"
              class="img-fluid top_selling_product_card img1"
            />
          </a>
          <h6 class="item-title mt-4">
            <a href="#">OFF WHITE X Nike Air Force</a>
          </h6>
          <strong class="item-price mt-1">
            <del className="text-muted">$120</del> $100
          </strong>

          <div class="star-rating mt-2">
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
          </div>
        </div>
        <div className="col-md-3 col-sm-5  col-12 mb-3 neo_card">
          <span class="notify-badge4">50%</span>
          <a href="#" class="product-item md-height bg-gray d-block">
            <img
              src="images/model_5.png"
              width="100%"
              src="https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Card image cap"
              class="img-fluid top_selling_product_card img1"
            />
          </a>
          <h6 class="item-title mt-4">
            <a href="#">OFF WHITE X Nike Air Force</a>
          </h6>
          <strong class="item-price mt-1">
            <del className="text-muted">$120</del> $100
          </strong>

          <div class="star-rating mt-2">
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
          </div>
        </div>
        <div className="col-md-3 col-sm-5  col-12 mb-3 neo_card">
          <span class="notify-badge4">50%</span>
          <a href="#" class="product-item md-height bg-gray d-block">
            <img
              src="images/model_5.png"
              width="100%"
              src="https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Card image cap"
              class="img-fluid top_selling_product_card img1"
            />
          </a>
          <h6 class="item-title mt-4">
            <a href="#">OFF WHITE X Nike Air Force</a>
          </h6>
          <strong class="item-price mt-1">
            <del className="text-muted">$120</del> $100
          </strong>

          <div class="star-rating mt-2">
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
          </div>
        </div>
        {/* <div className="col-md-3 col-sm-5  col-12 mb-3">
          <div>
            
            <Card>
              <CardImg
                className="img-fluid top_selling_product_card"
                top
                width="100%"
                src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Card image cap"
              />
              <CardBody>
                <CardSubtitle>OFF WHITE X Nike Air Force </CardSubtitle>
                <CardSubtitle>
                  <h4 className="mt-2">$100</h4>
                </CardSubtitle>
              </CardBody>
            </Card>
          </div>
        </div> */}
        {/* <div className="col-md-3   col-12 mb-3">
          <div>
            <Card>
              <CardImg
                className="img-fluid top_selling_product_card"
                top
                width="100%"
                src="https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Card image cap"
              />
              <CardBody>
                <CardSubtitle>N5 Chanel eau de parfum</CardSubtitle>
                <CardSubtitle>
                  <h4 className="mt-2">$150</h4>
                </CardSubtitle>
              </CardBody>
            </Card>
          </div>
        </div> */}
      </Row>
    </Container>
  );
};

export default TopSelling_propduct;
