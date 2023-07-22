import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/navbar.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { BrowserRouter as Router, Link, Route, Switch, useLocation } from 'react-router-dom';

function PageNavbarFrench() {
  const location = useLocation();

  // Définir un tableau de chemins de pages où la barre de navigation doit être affichée
  const navbarVisiblePages = ['/Accueil', '/Aproposdenous'];

  // Vérifier si l'emplacement actuel se trouve dans le tableau navbarVisiblePages
  const shouldShowNavbar = navbarVisiblePages.includes(location.pathname);

  const [currentLanguage, setCurrentLanguage] = useState('Français');

  const handleLanguageChange = (selectedLanguage) => {
    setCurrentLanguage(selectedLanguage);
    // Naviguer vers la page de langue correspondante en utilisant le routage basé sur le hash
    if (selectedLanguage === 'English') {
      if (location.pathname === '/Accueil') {
        window.location.hash = '/'; // Change the hash to Accueil
      } else if (location.pathname === '/Aproposdenous') {
        window.location.hash = '/Aboutus'; // Change the hash to Aproposdenous
      }
    }
  };

  if (!shouldShowNavbar) {
    return null; // Renvoyer null si la barre de navigation ne doit pas être affichée pour la page actuelle
  }

  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/Accueil">

          <img src="images/Drawing.png" width="200px" height="110px" alt="logo" />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='navBarLink' as={Link} to="/Aproposdenous">À PROPOS</Nav.Link>
            <Nav.Link className='navBarLink' as={Link} to="/Programs">PROGRAMMES</Nav.Link>
            <Nav.Link className='navBarLink' as={Link} to="/Register1">INSCRIPTION</Nav.Link>
            <Nav.Link className='navBarLink' as={Link} to="/Contactus">NOUS CONTACTER</Nav.Link>
          </Nav>
          <DropdownButton
            title={currentLanguage}
            id="language-dropdown"
            variant="secondary"
            className="language-dropdown"
          >
            <Dropdown.Item onClick={() => handleLanguageChange('English')}>English</Dropdown.Item>
            <Dropdown.Item>Français</Dropdown.Item>
          </DropdownButton>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PageNavbarFrench;