import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "../styles/navbar.css";
import { BrowserRouter as Router, Link, Route, Switch, useLocation } from 'react-router-dom';

function PageNavbarAbout() {
  const location = useLocation();

  // Define an array of page paths where the navbar should be shown
  const navbarVisiblePages = ['/', '/Aboutus'];

  // Check if the current location is in the navbarVisiblePages array
  const shouldShowNavbar = navbarVisiblePages.includes(location.pathname);

  const [currentLanguage, setCurrentLanguage] = useState('English');

  const handleLanguageChange = (selectedLanguage) => {
    setCurrentLanguage(selectedLanguage);
    // Naviguer vers la page de langue correspondante en utilisant le routage basé sur le hash
    if (selectedLanguage === 'Français') {
      if (location.pathname === '/') {
        window.location.hash = '/Accueil'; // Change the hash to Home
      } else if (location.pathname === '/Aboutus') {
        window.location.hash = '/Aproposdenous'; // Change the hash to Aboutus
      }
    }
  };

  if (!shouldShowNavbar) {
    return null; // Return null if the navbar should not be shown for the current page
  }

  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">

          <img src="images/Drawing.png" width="200px" height="110px" alt="logo" />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='navBarLink' as={Link} to="/Aboutus">ABOUT</Nav.Link>
            <Nav.Link className='navBarLink' as={Link} to="/Programs">PROGRAMS</Nav.Link>
            <Nav.Link className='navBarLink' as={Link} to="/Register1">REGISTER</Nav.Link>
            <Nav.Link className='navBarLink' as={Link} to="/Contactus">CONTACT US</Nav.Link>
          </Nav>
          <DropdownButton
            title={currentLanguage}
            id="language-dropdown"
            variant="secondary"
            className="language-dropdown"
          >
              <Dropdown.Item>English</Dropdown.Item>
            <Dropdown.Item onClick={() => handleLanguageChange('Français')}>Français</Dropdown.Item>
          </DropdownButton>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PageNavbarAbout;