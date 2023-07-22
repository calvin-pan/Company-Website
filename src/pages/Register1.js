import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Stepper1 from '../components/Stepper1';
import { useNavigate } from 'react-router-dom';
import FormToolTip from '../components/FormToolTip';
import '../styles/Register1.css';


function Register1() {
  
    
  const navigate = useNavigate();

  const [validated, setValidated] = useState('');

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated('invalid');
    }

    else{
        setValidated('valid');
        navigate('/Register2');
    }

    
  };

  return (
   
    <div>

    <h1 className="title">Registration Form</h1>
    <div className = "marginBottom">
    <Stepper1 activestep={0}></Stepper1>
    </div>

    

    <Container className="justify-content-center">
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      
        <Form.Group controlId="validationCustom01" className="marginBottom">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
          />
          <Form.Control.Feedback type='invalid'>Please provide your first name</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustom02" className="marginBottom">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
          />
          <Form.Control.Feedback type='invalid'>Please provide your last name</Form.Control.Feedback>
        </Form.Group>
        
      
      
        <Form.Group controlId="validationCustom03" className="marginBottom">
          <Form.Label>Email Address &nbsp;<FormToolTip title={'Please include the @ symbol in your email address.'} /></Form.Label>
          <div className='row'>
            <div>
                <Form.Control type="email" placeholder="Email Address" required />
            </div>
          </div>
          

          <Form.Control.Feedback type="invalid" className="marginBottom">
            Please provide a valid email address. Your email address should have a @ and a valid domain.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationCustom05">
          <Form.Label>Phone Number  &nbsp;<FormToolTip title={'Your phone number should have 10 digits.'} /></Form.Label>
          <div className='row'>
            <div>
                <Form.Control type="text" pattern='[0-9]{10}' placeholder="Phone Number" required />
            </div>
          </div>
          
          <Form.Control.Feedback type="invalid">
            Please provide a 10 digit phone number.Please do not include the country code.
          </Form.Control.Feedback>
        </Form.Group>
      
        <div className="d-flex justify-content-center">
      <Button href="/" className="buttonMargin">Cancel</Button>
      <Button type="submit" className="button">Next</Button>
    </div>
      
    </Form>
    </Container>
    </div>
  );
}

export default Register1;