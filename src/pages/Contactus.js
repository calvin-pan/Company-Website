import React, { useState } from 'react';
import ChatBox from '../components/ChatBox';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../styles/Contactus.css';
import { RiPhoneLine } from 'react-icons/ri';
import { BsEnvelope } from 'react-icons/bs';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';


import { Button } from 'react-bootstrap';
function Contactus(){

    const toggleChatBox = () => {
        window.open('#/ChatBox', 'Chat Box', 'width=400,height=600');
    };

    const handleEmailClick = () => {
        const email = 'example@example.com';
        window.location.href = `mailto:${email}`;
      };
      
      const handlePhoneClick = () => {
        const phoneNumber = '+1234567890';
        window.location.href = `tel:${phoneNumber}`;
      };
      
  
    return (
        <div>
            <h1 className="title"><span className="serenityText">Contact</span> Us</h1>

            <Container>
                <Row>
                    <Col xs={6} md={4}>
                    <div className="image-container">
                        <Image src="images/email.png" alt="Image" width="100px" height="100px" className="" />
                        </div>
                        <br>
                        </br>

                        <p>Any questions, comments, or concerns can be forwarded to our email.</p>


                        <div className="d-flex justify-content-center">
                        <Button variant="primary" onClick={handleEmailClick}>
                        <BsEnvelope /> Email
                            </Button>
                        </div>

                    </Col>
                    <Col xs={6} md={4}>
                    <div className="image-container">
                        <Image src="images/phone.png" alt="Image" width="100px" height="100px" />
                        </div>

                        <br>
                        </br>

                        <p>Urgent issues can be asked through to our phone number.</p>

                        <div className="d-flex justify-content-center">
                        <Button variant="primary" onClick={handlePhoneClick}>
                            <RiPhoneLine /> Call
                        </Button>

                        </div>

                    </Col>

                    <Col xs={6} md={4}>
                    <div className="image-container">
                        <Image src="images/chat.png" alt="Image" width="100px" height="100px" />
                        </div>
                        <br>
                        </br>
                        <p>Our chat is available from 9 am - 5 pm, Monday to Friday.</p>
                        <div className="d-flex justify-content-center">
                        <Button onClick={toggleChatBox}>Toggle Chat</Button>
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
    );

}

export default Contactus;