import React from "react";
import '../styles/Home.css';
import HomeCarousel from "../components/HomeCarousel";
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';

function Accueil() {
  const openLink = () => {
    window.location.hash = '/Aboutus';
  };

  return (
    <div>
      <div className="two-column-layout">
        <div className="left-column">
          <h1 className="paddedTitle">Bienvenue au Serenity Swim Club.</h1>

          <div className="descriptionContainer">
            <p className="paddedDescription">Plongez dans un monde d'excellence aquatique et rejoignez notre communauté dynamique où les nageurs de tous âges et niveaux de compétence se rassemblent pour améliorer leur technique, renforcer leur endurance et cultiver l'amour de l'eau.
              Sous la direction d'entraîneurs expérimentés, notre club inclusif propose des programmes adaptés aux débutants et aux nageurs compétitifs.
              Avec des installations de pointe, nous accordons une grande importance à la sécurité et offrons un environnement sûr.
              Que vous recherchiez la forme physique, la compétition ou la détente, le Club de Natation Sérénité est votre destination pour une expérience de natation inoubliable.
              Préparez-vous à faire des éclaboussures avec Sérénité !</p>
          </div>

          <div className="buttonPadding">
            <Button variant="outline-primary" className="custom-button" onClick={openLink}>En savoir plus</Button>
          </div>
        </div>
        <div className="right-column">
          <HomeCarousel />
        </div>
      </div>

      <Container className="sponsors">
        <h2 className="sponsorsTitle">Sponsors et Partenaires</h2>
        <Row>
          <Col>
            <img src="images/sponsor1.png" alt="Image 1" aria-label="Casques de fans" />
          </Col>
          <Col>
            <img src="images/sponsor2.png" alt="Image 2" aria-label="Belles fleurs" />
          </Col>
          <Col>
            <img src="images/sponsor3.png" alt="Image 3" aria-label="Burgers de Mike" />
          </Col>
        </Row>
      </Container>

      <h2 className="followTitle">Suivez-nous !</h2>
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

export default Accueil;
