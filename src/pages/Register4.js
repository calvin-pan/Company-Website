import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import '../styles/Register4.css';
import Stepper1 from '../components/Stepper1';

function Register4() {

    const number = Math.floor(Math.random() * 100) + 1;

    const openLink = () => {
        window.location.href = '#/';
    };

  return (
    <>
   
    <h1 className="title">Your form has been submitted!</h1>

    <Stepper1 activestep={3}></Stepper1>

    <h2 className="text-center confirmationNumber">Confirmation number: {number}</h2>

    <p className="text-center">A confirmation email has been sent to your provided email address.</p>
    <div className="button-container">
      <Button class="primary" onClick={openLink} className="button">Return Home</Button>
      </div>
    </>
  );
}

export default Register4;