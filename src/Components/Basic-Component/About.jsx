import React from "react";

const About = () => {
  return (
    <div>
      <div className="container section-3 mb-5">
        <div className="section-ptb align-items-center row">
          <div className="order-md-1 mb-4 mb-md-0 col-md-6">
            <div className="single_image-wrapper">
              <img
                src="https://ciyashop-react.potenzaglobalsolutions.com/static/media/about-img.8711201d.png"
                className="attachment-full img-fluid"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-wrapper">
              <span>Know more</span>
            </div>
            <div className="section-title mb-4">
              <h2 className="title text-left"> About RushMore</h2>
              <div className="text-wrapper">
                <p>
                  We are RushMore ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veni quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="ciyashop_button_wrapper ciyashop_button_width_default">
              <div className="inline_hover ciyashop_button_link ciyashop_button_size_medium button-underline">
                <a
                  style={{ cursor: "pointer" }}
                  className="inline_hover"
                  href=""
                >
                  {" "}
                  Read More..{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
