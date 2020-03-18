import React from "react";

const Full_width_section = () => {
  return (
    <section
      className="fullwidth margin-top-105 "
      data-background-color="#f7f7f7"
    >
      <h3 className="headline-box ">Shopping Process</h3>

      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="icon-box-1">
              <div className="icon-container">
                <i className="im im-icon-Office">
                  <i className="fas fa-sign-in-alt"></i>
                </i>
              </div>

              <h3>Signup</h3>
              <p>
                Aliquam dictum elit vitae mauris facilisis, at dictum urna
                dignissim donec vel lectus vel felis.
              </p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="icon-box-1">
              <div className="icon-container">
                <i className="im im-icon-Home-2">
                  <i className="fas fa-cart-plus"></i>
                </i>
              </div>

              <h3>Add to Cart</h3>
              <p>
                Aliquam dictum elit vitae mauris facilisis, at dictum urna
                dignissim donec vel lectus vel felis.
              </p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="icon-box-1">
              <div className="icon-container">
                <i className="im im-icon-Car-3">
                  <i className="fas fa-money-bill-wave"></i>
                </i>
              </div>

              <h3>Checkout</h3>
              <p>
                Aliquam dictum elit vitae mauris facilisis, at dictum urna
                dignissim donec vel lectus vel felis.
              </p>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="icon-box-1">
              <div className="icon-container">
                <i className="im im-icon-Clothing-Store">
                  <i className="fas fa-truck"></i>
                </i>
              </div>

              <h3>Delivery</h3>
              <p>
                Aliquam dictum elit vitae mauris facilisis, at dictum urna
                dignissim donec vel lectus vel felis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Full_width_section;
