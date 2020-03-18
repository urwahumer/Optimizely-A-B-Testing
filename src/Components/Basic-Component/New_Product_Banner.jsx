import React from "react";

const New_Product_Banner = () => {
  return (
    <div>
      <div className="bg-light mb-5" data-aos="fade">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ml-auto  d-flex align-items-center  justify-content-center">
              <div className="site-block-cover-content text-center">
                <p className="sub-title mt-3 text-muted">
                  #New Summer Collection 2019
                </p>
                <h1 className="font-weight-bold mt-3 new_product_text">
                  New Shoes
                </h1>
                <p>
                  <a href="#" className="btn btn-black rounded-0 mt-2">
                    Shop Now
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6  ">
              <img
                src="https://www.stickpng.com/assets/images/580b57fbd9996e24bc43bf4a.png"
                alt="Image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New_Product_Banner;
