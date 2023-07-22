import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
  return (
    <Carousel
      aria-label="Home Page Carousel"
      role="region"
      aria-roledescription="carousel"
      interval={5000} // Set your desired interval here
      pause={false} // Set to true if you want to pause on hover, false otherwise
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/Carousel1.jpg"
          alt="First slide"
          aria-label="Image 1 of carousel"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/Carousel2.jpg"
          alt="Second slide"
          aria-label="Image 2 of carousel"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/Carousel3.jpg"
          alt="Third slide"
          aria-label="Image 3 of carousel"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
