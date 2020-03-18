import React from "react";

const Subsrcibe = () => {
  return (
    <div className="container">
      <div className="banner-bg section-ptb">
        <div className="justify-content-center row">
          <div className="col-sm-10 col-md-8 col-lg-6">
            <div className="newsletter-wrapper newsletter-style-1 newsletter-design-4">
              <h2 className="newsletter-title">
                {" "}
                Subscribe today and get 25% off on your first order!
              </h2>
              <div className="newsletter">
                <div className="section-field">
                  <div className="field-widget clearfix">
                    <form className="newsletter_form">
                      <div className="input-area">
                        <input
                          type="email"
                          className="placeholder newsletter-email"
                          name="newsletter_email"
                          placeholder="Enter your email"
                          value=""
                        />
                        <span className="error"></span>
                      </div>
                      <div className="button-area">
                        <span className="input-group-btn">
                          <button type="submit" className="btn btn-icon">
                            <i class="far fa-paper-plane"></i> Subscribe
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subsrcibe;
