import './App.css';
import PageNavbar from './components/PageNavbar';
import {BrowserRouter as Router, Routes, Route, Link, NavLink, useHistory, useLocation, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Aboutus from './pages/Aboutus';
import Register1 from './pages/Register1';
import Register2 from './pages/Register2';
import Register3 from './pages/Register3';
import Register4 from './pages/Register4';
import Contactus from './pages/Contactus';
import ChatBox from './pages/ChatBox';
import PageNotFound from './pages/PageNotFound';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import Aproposdenous from './pages/Aproposdenous';
import PageNavbarFrench from './components/PageNavbarFrench';
import PageNavbarAbout from './components/PageNavbarAbout';
import Accueil from './pages/Accueil';


function App() {
  return (
    <HashRouter basename="/">
      <PageNavbar />
      <PageNavbarFrench />
      <PageNavbarAbout />
      <Routes>
        
        <Route path='/' element = {<Home />} />
        <Route path='/Aboutus' element = {<Aboutus />} />
        <Route path='/Programs' element = {<Programs />} />
        <Route path='/Register1' element = {<Register1 />} />
        <Route path='/Register2' element = {<Register2 />} />
        <Route path='/Register3' element = {<Register3 />} />
        <Route path='/Register4' element = {<Register4 />} />
        <Route path='/Contactus' element = {<Contactus />} />
        <Route path='/ChatBox' element = {<ChatBox />} />
        <Route path='/Aproposdenous' element = {<Aproposdenous />} />
        <Route path='/Accueil' element = {<Accueil />} />
       <Route path='/PageNotFound' element={ <PageNotFound /> } />
     { <Route path='/*'  element={ <Navigate to="/PageNotFound" replace />} />}
             </Routes>
    </HashRouter>/*</Router>*/
  );
}

export default App;
