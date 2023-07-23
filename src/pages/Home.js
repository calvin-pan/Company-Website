import React from "react";
import '../styles/Home.css';
import HomeCarousel from "../components/HomeCarousel";
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  const openLink = () => {
    window.location.hash = '/Aboutus';
  };

  return (
    <div>
      <div className="two-column-layout">
        <div className="left-column">
          <h1 className="paddedTitle">Welcome To <span className="serenityText">Serenity</span> Swim Club.</h1>

          <div className="descriptionContainer">
            <p className="paddedDescription">Dive into a world of aquatic excellence and join our vibrant community where swimmers of all ages and skill levels come together to improve technique, build endurance, and foster a love for the water.
              Led by experienced coaches, our inclusive club offers tailored programs for beginners and competitive swimmers alike.
              With state-of-the-art facilities, we prioritize safety and provide a secure environment.
              Whether you're seeking fitness, competition, or relaxation, Serenity Swim Club is your destination for an unforgettable swimming experience.
              Get ready to make a splash with Serenity!</p>
          </div>

          <div className="buttonPadding">
            <Button variant="outline-primary" className="custom-button" onClick={openLink}>Learn More</Button>
          </div>
        </div>
        <div className="right-column">
          <HomeCarousel />
        </div>
      </div>

      <Container className="sponsors">
        <h2 className="sponsorsTitle">Sponsors and Partners</h2>
        <Row>
          <Col>
            <img src="images/sponsor1.png" alt="Sponsor 1" aria-label="Headphones Fans"/>
          </Col>
          <Col>
            <img src="images/sponsor2.png" alt="Sponsor 2" aria-label="Great Flowers"/>
          </Col>
          <Col>
            <img src="images/sponsor3.png" alt="Sponsor 3" aria-label="Mike's Burgers"/>
          </Col>
        </Row>
      </Container>

      <h2 className="followTitle">Follow Us!</h2>
      <div className="image-container">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <img src="images/facebook.svg" alt="Facebook" height="50px" width="50px" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img src="images/instagram.svg" alt="Instagram" height="50px" width="50px" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <img src="images/twitter.svg" alt="Twitter" height="50px" width="50px" />
        </a>
      </div>
    </div>
  );
}

export default Home;