import React, { useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import '../styles/Register3.css';
import Stepper1 from '../components/Stepper1';

function Register3() {
  const [selectedOption, setSelectedOption] = useState('');
  const [input1Value, setInput1Value] = useState('');
  const [input2Value, setInput2Value] = useState('');
  const [input3Value, setInput3Value] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);

  const handleRadioChange = (event) => {
    const { value } = event.target;
    setSelectedOption(value);

    // Clear input values and display text
    setInput1Value('');
    setInput2Value('');
    setInput3Value('');
    setDisplayText(`Please mail cheques to:
    123 Anywhere Street
    City, Province, Postal Code`);

    setError(false);
  };

  const handleInput1Change = (event) => {
    setInput1Value(event.target.value);
  };

  const handleInput2Change = (event) => {
    setInput2Value(event.target.value);
  };

  const handleInput3Change = (event) => {
    setInput3Value(event.target.value);
  };

  const handleDisplayTextChange = () => {
    setDisplayText(`${input1Value} ${input2Value} ${input3Value}`);
  };

  const openLink = () => {
    if (!selectedOption) {
      setError(true); // Set error if no radio button is selected
      return;
    }

    if (selectedOption === 'inputs' && (!input1Value || !input2Value || !input3Value)) {
      setError2(true); // Set error if text fields are not filled out
      return;
    }

    setError(false); 
    setError2(false);
    window.location.href = '#/Register4';
  };
  const openLink2 = () => {
    window.location.href = '#/Register2';
  };


  return (
    <>
      <h1 className="title">Enter Your Payment Information</h1>

      <Stepper1 activestep={2}></Stepper1>

      <div className="d-flex justify-content-center">
      <div className="custom-form">
        <Form>
          <div className="radio-group marginTop">
            <Form.Check
              type="radio"
              id="radioButton1"
              label="Pay by Credit Card"
              value="inputs"
              checked={selectedOption === 'inputs'}
              onChange={handleRadioChange}
              className="custom-label"
            />

            {selectedOption === 'inputs' && (
              <div className="radio-content">
                <Form.Control
                  type="text"
                  placeholder="Credit Card Number"
                  value={input1Value}
                  onChange={handleInput1Change}
                  className="input-field"
                />

                <Form.Control
                  type="text"
                  placeholder="CVV"
                  value={input2Value}
                  onChange={handleInput2Change}
                  className="input-field"
                />

                <Form.Control
                  type="text"
                  placeholder="Date of Expiry"
                  value={input3Value}
                  onChange={handleInput3Change}
                  className="input-field"
                />

                {/* Error message for empty fields */}
                <Form.Control.Feedback type="invalid" style={{ display: (error2) ? 'block' : 'none' }}>
                Please fill out all fields.
              </Form.Control.Feedback>
              </div>
            )}
          </div>

          <div className="radio-group marginTop2">
            <Form.Check
              type="radio"
              id="radioButton2"
              label={"Pay by Cheque"}
              value="text"
              checked={selectedOption === 'text'}
              onChange={handleRadioChange}
              className="custom-label"
            />

            {selectedOption === 'text' && <p className="radio-content">{displayText}</p>}
          </div>

          
          <Form.Control.Feedback type="invalid" style={{ display: (error) ? 'block' : 'none' }}>
            Please select a payment option.
          </Form.Control.Feedback>

          <div className="d-flex justify-content-center marginTop">
          <Button class="primary" className="buttonMargin" onClick={openLink2}>Back</Button>
            <Button class="primary" onClick={openLink} className="button">Next</Button>
          </div>
        </Form>
        </div>
      </div>
    </>
  );
}

export default Register3;
