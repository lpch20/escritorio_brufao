import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carouselService.css";

const services = [
  { icon: "/Lector.png", title: "Advanced security" },
  { icon: "/camion.png", title: "Analytics" },
  { icon: "/store.png", title: "Automated workflows" },
  { icon: "/shearing.png", title: "Cloud storage" },
  { icon: "/trabajo.png", title: "Customer support" },
  { icon: "/mano.png", title: "Integrations" },
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const CarouselServices = () => {
  return (
    <div className="carousel-container max-w-7xl m-auto">
      <div id="service">
        <h2
          style={{ fontFamily: "koulen", color: '#1d88a2' }}
          className="leading-7 flex xl:flex xl:items-start font-bold xl:text-9xl  text-8xl items-center xl:justify-start justify-center text-center mb-10"
        >
          SERVICIOS
        </h2>
      </div>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        arrows={true}
        className="services-carousel"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="service-item flex flex-col items-center p-4"
          >
            <img
              style={{ width: "100px" }}
              className="w-16 mb-4"
              src={service.icon}
              alt={service.title}
            />
            <p
              style={{ fontFamily: "koulen" }}
              className="text-base font-semibold"
            >
              {service.title}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselServices;
