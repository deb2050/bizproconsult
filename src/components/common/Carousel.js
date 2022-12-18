import React from "react";
import Carousel from "react-bootstrap/Carousel";
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import banner3 from '../../images/banner3.jpg';

import './Carousel.css';

const CarouselBanner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={banner1} width="2000" height="500"
            alt="Expand your Business"
          />
          <Carousel.Caption>
            <h1>Expand your Business</h1>
            <p>with our Services</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={banner2} width="2000" height="500"
            alt="Enhance your Organization's Performance"
          />
          <Carousel.Caption>
            <h1>Enhance your Organization's Performance</h1>
            <p>with our Services</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3} width="2000" height="500"
            alt="Your Consulting Partner"
          />
          <Carousel.Caption>
            <h1>Your Consulting Partner</h1>
            <p>
              for your growth
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselBanner;
