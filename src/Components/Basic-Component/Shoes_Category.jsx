import React from "react";
import pierecardin from "../../Assets/Images/pierre-cardin-logo.png";
import Timbaland_logo from "../../Assets/Images/timberland-vector-logo.png";
const Shoes_Category = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <span className="headline centered margin-bottom-35 margin-top-10 d-flex justify-content-center align-items-center flex-column">
            <h1 className="font-weight-bold">Footwear</h1>
            <h6>All of the Brands you Love</h6>
          </span>
        </div>
        <div className="col-md-4">
          {/* <!-- Image Box --> */}
          <a
            href="listings-list-with-sidebar.html"
            className="img-box shoe_box_bg3 "
          >
            <div className="listing-badges">
              {/* <img
                src="https://images.pexels.com/photos/1661470/pexels-photo-1661470.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                className=" img-fluid"
              ></img> */}
            </div>

            <div className="img-box-content visible">
              <h4>
                <img src="https://img.icons8.com/ios/100/000000/adidas-trefoil.png" />
              </h4>
              <span>Casual Shoes</span>
            </div>
          </a>
        </div>

        <div className="col-md-8 ">
          {/* <!-- Image Box --> */}
          <a
            href="listings-list-with-sidebar.html"
            className="img-box shoe_box_bg"
          >
            <img src="" className="  img-fluid"></img>
            <div className="img-box-content visible">
              <h4>
                <img src={pierecardin} width="130px" />
              </h4>
              <span>Formal Shoes</span>
            </div>
          </a>
        </div>

        <div className="col-md-8">
          {/* <!-- Image Box --> */}
          <a
            href="listings-list-with-sidebar.html"
            className="img-box shoe_box_bg2"
          >
            <div className="img-box-content visible">
              <h4>
                <img src="https://img.icons8.com/material/100/000000/nike.png" />
              </h4>
              <span>Casual Shoes</span>
            </div>
          </a>
        </div>

        <div className="col-md-4">
          {/* <!-- Image Box --> */}
          <a
            href="listings-list-with-sidebar.html"
            className="img-box shoe_box_bg4 "
          >
            {/* <img src="https://images.pexels.com/photos/718981/pexels-photo-718981.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img> */}
            <div className="img-box-content visible">
              <h4>
                <img src={Timbaland_logo} width="130px" />
              </h4>
              <span>Working Shoes</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Shoes_Category;
