import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const items = [
  {
    src:
      "https://ciyashop-react.potenzaglobalsolutions.com/static/media/img-02.d3e42d8e.jpg",
    altText: "Slide 1",
    caption: "Women",
    path: "/Women"
  },
  {
    src:
      "https://ciyashop-react.potenzaglobalsolutions.com/static/media/img-01.72f1ed21.jpg",
    altText: "Slide 2",
    caption: "Men",
    path: "/Men"
  }
];

const Example = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <Link to={item.path}>
          <div className="container-fluid">
            <div>
              <div className="row">
                <img
                  className="d-block w-100 img-fluid sick_slider"
                  src={item.src}
                  alt={item.altText}
                />
              </div>
            </div>
          </div>
        </Link>
        <CarouselCaption
          className="carousel_caption"
          // captionText={item.caption}
          // captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default Example;
