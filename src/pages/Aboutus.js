import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import '../styles/Aboutus.css';

function Aboutus(){



    return (
        <div aria-description='This page provides information about Serenity Swim Club. It has three sections: a video of the facility, locations, and staff members.'>
            <h1 className="title"><span className="serenityText">About</span> Us</h1>
            <div className="video-container">
            <video controls className="video-element" aria-label="Video of the interior of one of our facilities">
                <source src="videos/video.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            </div>
            <h2 className="locationsTitle">Our Locations</h2>

            <div className="accordionContainer">
            <Accordion defaultActiveKey="0" className="accordion" >
            <Accordion.Item eventKey="0">
            <Accordion.Header>North Ottawa</Accordion.Header>
            <Accordion.Body>

                <Container>
                    <Row>
                    <Col>
                    <br>
                    </br>
                    <p className="address">101 Random address</p>
                    <br>
                    </br>
                    <p className="address">Ottawa, Ontario K1N 6N5</p>
                    <br>
                    </br>
                    </Col>
                    <Col>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.8332568149553!2d-75.68428520072841!3d45.4230982368893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce050a6db98d73%3A0x188a59c3622fdbae!2sUniversity%20of%20Ottawa!5e0!3m2!1sen!2sca!4v1688242930547!5m2!1sen!2sca" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Col>
                    </Row>
                </Container>

                <h3 className="divingBoardTitle">Diving Boards</h3>
                <p className="text-center">
                Diving boards of height 5 and 10 m are available.
                 </p>
                 <Image src="images/Graph.png" className="mx-auto d-block" alt="Diving Board Graph" height="375px" aria-label="Diving Board Graph"/>
            </Accordion.Body>
             </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>East Ottawa</Accordion.Header>
                <Accordion.Body>
                <Container>
                    <Row>
                    <Col>
                    <br>
                    </br>
                    <p className="address">102 Random address</p>
                    <br>
                    </br>
                    <p className="address">Ottawa, Ontario K2P 0V2</p>
                    <br>
                    </br>
                    </Col>
                    <Col>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.8332568149553!2d-75.68428520072841!3d45.4230982368893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce050a6db98d73%3A0x188a59c3622fdbae!2sUniversity%20of%20Ottawa!5e0!3m2!1sen!2sca!4v1688242930547!5m2!1sen!2sca" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Col>
                    </Row>
                </Container>
                <h3 className="divingBoardTitle">Diving Boards</h3>
                <p className="text-center">
                A diving board of 7 m is available.
                 </p>
                 <Image src="images/Graph.png" className="mx-auto d-block" alt="Diving Board Graph" height="375px" aria-label="Diving Board Graph"/>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>South Ottawa</Accordion.Header>
                <Accordion.Body>
                <Container>
                    <Row>
                    <Col>
                    <br>
                    </br>
                    <p className="address">103 Random address</p>
                    <br>
                    </br>
                    <p className="address">Ottawa, Ontario K1A 0B1</p>
                    <br>
                    </br>
                    </Col>
                    <Col>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.8332568149553!2d-75.68428520072841!3d45.4230982368893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce050a6db98d73%3A0x188a59c3622fdbae!2sUniversity%20of%20Ottawa!5e0!3m2!1sen!2sca!4v1688242930547!5m2!1sen!2sca" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Col>
                    </Row>
                </Container>
                <h3 className="divingBoardTitle">Diving Boards</h3>
                <p className="text-center">
                Diving boards of 3, 6, and 11 m are available.
                 </p>
                 <Image src="images/Graph.png" className="mx-auto d-block" alt="Diving Board Graph" height="375px" aria-label="Diving Board Graph"/>
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            </div>

            <h2 className="teamTitle">Our Team</h2>
            <Container>
      <Row>
        <Col md={4}>
          <Card>
          <Image src="images/person1.jpg" alt="Picture of Ethan Grant" height="375px" />
            <Card.Body>
            
              <Card.Title className="text-center">Ethan Grant</Card.Title>
              <Card.Subtitle className="mb-2 text-muted text-center">Head Coach</Card.Subtitle>

              <Card.Text >Ethan Grant is a highly accomplished and dedicated swim coach, known for his expertise in training methodologies and stroke mechanics. With a strong background in competitive swimming, he empowers athletes to reach their full potential through tailored programs and unwavering support. Ethan's leadership and commitment foster growth, resilience, and a deep passion for swimming among his team.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
          <Image src="images/person2.jpg" alt="Picture of Sophia Sterling" height="375px" />
            <Card.Body>
              <Card.Title className="text-center">Sophia Sterling</Card.Title>
              <Card.Subtitle className="mb-2 text-muted text-center">Pool Supervisor</Card.Subtitle>
              <Card.Text>Sophia Sterling is a highly dedicated pool supervisor with a keen eye for detail. With her expertise in aquatic safety and strong leadership skills, she ensures a safe and enjoyable environment for all. Sophia's proactive approach and problem-solving abilities make her an invaluable asset to the pool facility and its patrons.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
          <Image src="images/person3.jpg" alt="Picture of Oliver Mitchell" height="375px"/>
            <Card.Body>
              <Card.Title className="text-center">Oliver Mitchell</Card.Title>
              <Card.Subtitle className="mb-2 text-muted text-center">Lead Instructor</Card.Subtitle>
              <Card.Text>Oliver Mitchell is a passionate lead swimming lessons instructor known for his patient approach and comprehensive expertise. With a focus on individual needs, he fosters a nurturing environment where students of all ages and abilities can develop confidence and essential swimming skills. Oliver's dedication and passion inspire a lifelong love for swimming in his students.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>


      </div>

    );

}

export default Aboutus;