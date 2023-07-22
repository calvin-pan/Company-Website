import React, { useState } from 'react';
import { Form, ProgressBar, Button } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import '../styles/Register2.css';
import Container from 'react-bootstrap/Container';
import Stepper1 from '../components/Stepper1';

function Register2() {
    const [error, setError] = useState(false); // State to track error

    const openLink = () => {
      const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
      if (checkboxes.length === 0) {
        setError(true); // Set error if no checkboxes are selected
      } else {
        window.location.hash = '/Register3';
      }
    };
  
    const openLink2 = () => {
      window.location.hash = '/Register1';
    };
  
    return (
      <div>
        <h1 className="title">Pick Your Programs</h1>
  
        <Stepper1 activestep={1}></Stepper1>
  
        <div className="d-flex justify-content-center">
          <Form>
            <h2 className="h2-margin">Recreational Swimming</h2>
  
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  label={'Recreational Swimming - Weekdays - Day'}
                />
  
                <Form.Check
                  type={type}
                  id={`default-${type}-evening-weekdays`}
                  label={'Recreational Swimming - Weekdays - Evening'}
                />
  
                <Form.Check
                  type={type}
                  id={`default-${type}-evening-weekends`}
                  label={'Recreational Swimming - Weekends - Evening'}
                />
  
                <Form.Check
                  type={type}
                  id={`default-${type}-day-weekends`}
                  label={'Recreational Swimming - Weekends - Day'}
                />
              </div>
            ))}
  
            <h2>Swimming Lessons</h2>
  
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}-child-lessons`}
                  label={'Swimming Lesson - Child Lessons'}
                />
  
                <Form.Check
                  type={type}
                  id={`default-${type}-adult-lessons`}
                  label={'Swimming Lesson - Adult Lessons'}
                />
              </div>
            ))}
  
            <h2>Competitive Swimming</h2>
  
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}-beginner`}
                  label={'Competitve Swim - Beginner'}
                />
  
                <Form.Check
                  type={type}
                  id={`default-${type}-intermediate`}
                  label={'Competitve Swim - Intermediate'}
                />
  
                <Form.Check
                  type={type}
                  id={`default-${type}-advanced`}
                  label={'Competitve Swim - Advanced'}
                />
              </div>
            ))}
  
            <Form.Control.Feedback type="invalid" style={{ display: error ? 'block' : 'none' }}>
              Please select at least one checkbox.
            </Form.Control.Feedback>
  
            <div className="d-flex justify-content-center">
              <Button class="primary" className="buttonMargin" onClick={openLink2}>Back</Button>
              <Button class="primary" className="button" onClick={openLink}>Next</Button>
            </div>
          </Form>
        </div>
      </div>
    );
  };

export default Register2;