import React from "react";

const NewsLetter_Subsription = () => {
  return (
    <div>
      <div className="newsletter-section section-ptb ">
        <div className="container">
          <div className="justify-content-center row">
            <div className="col-sm-10 col-md-8 col-lg-6">
              <div className="newsletter-wrapper newsletter-style-1 newsletter-design-6">
                <h2 className="newsletter-title text-dark">
                  Join Our Newsletter
                </h2>
                <div className="newsletter">
                  <p>
                    Keep up on our always evolving product features and
                    technology. Enter your e-mail and subscribe to our
                    newsletter.
                  </p>
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
                            <button type="submit" className="btn  btn-icon">
                              Subscribe
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
    </div>
  );
};

export default NewsLetter_Subsription;
