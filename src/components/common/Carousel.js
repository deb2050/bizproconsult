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
            alt="Erweitern Sie Ihr Geschäft"
          />
          <Carousel.Caption>
            <h1>Erweitern Sie Ihr Geschäft</h1>
            <p>mit unseren Dienstleistungen</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={banner2} width="2000" height="500"
            alt="Verbessern Sie die Leistung Ihrer Organisation"
          />
          <Carousel.Caption>
            <h1>Verbessern Sie die Leistung Ihrer Organisation</h1>
            <p>mit unseren Dienstleistungen</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3} width="2000" height="500"
            alt="Ihr Beratungspartner"
          />
          <Carousel.Caption>
            <h1>Ihr Beratungspartner</h1>
            <p>
              für Ihr Wachstum
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselBanner;
