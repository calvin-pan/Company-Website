import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import '../styles/Aboutus.css';

function Aproposdenous() {
    return (
        <div>
            <h1 className="title">À Propos de Nous</h1>
            <div className="video-container">
                <video controls className="video-element">
                    <source src="videos/video.mp4" type="video/mp4"/>
                    Votre navigateur ne prend pas en charge la balise vidéo.
                </video>
            </div>
            <h2 className="locationsTitle">Nos lieux</h2>

            <div className="accordionContainer">
                <Accordion defaultActiveKey="0" className="accordion">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Ottawa Nord</Accordion.Header>
                        <Accordion.Body>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>101 Adresse au hasard</p>
                                        <br/>
                                        <p>Ottawa, Ontario 123 457</p>
                                        <br/>
                                    </Col>
                                    <Col>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2800.303231288989!2d-75.6826017!3d45.4233884!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce050a6db98d73%3A0x188a59c3622fdbae!2sUniversit%C3%A9%20d&#39;Ottawa!5e0!3m2!1sfr!2sca!4v1690035325321!5m2!1sfr!2sca" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </Col>
                                </Row>
                            </Container>

                            <h3 className="divingBoardTitle">Plongeoirs</h3>
                            <p className="text-center">
                                Des plongeoirs de 5 et 10 mètres sont disponibles.
                            </p>
                            <Image src="images/GraphFrench.png" className="mx-auto d-block" alt="Texte alternatif de l'image" height="375px"/>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Ottawa Est</Accordion.Header>
                        <Accordion.Body>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>101 Adresse au hasard</p>
                                        <br/>
                                        <p>Ottawa, Ontario 123 457</p>
                                        <br/>
                                    </Col>
                                    <Col>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2800.303231288989!2d-75.6826017!3d45.4233884!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce050a6db98d73%3A0x188a59c3622fdbae!2sUniversit%C3%A9%20d&#39;Ottawa!5e0!3m2!1sfr!2sca!4v1690035325321!5m2!1sfr!2sca" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </Col>
                                </Row>
                            </Container>
                            <h3 className="divingBoardTitle">Plongeoir</h3>
                            <p className="text-center">
                                Un plongeoir de 7 mètres est disponible.
                            </p>
                            <Image src="images/GraphFrench.png" className="mx-auto d-block" alt="Texte alternatif de l'image" height="375px"/>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Ottawa Sud</Accordion.Header>
                        <Accordion.Body>
                            <Container>
                                <Row>
                                    <Col>
                                        <p>101 Adresse au hasard</p>
                                        <br/>
                                        <p>Ottawa, Ontario 123 457</p>
                                        <br/>
                                    </Col>
                                    <Col>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2800.303231288989!2d-75.6826017!3d45.4233884!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce050a6db98d73%3A0x188a59c3622fdbae!2sUniversit%C3%A9%20d&#39;Ottawa!5e0!3m2!1sfr!2sca!4v1690035325321!5m2!1sfr!2sca" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </Col>
                                </Row>
                            </Container>
                            <h3 className="divingBoardTitle">Plongeoirs</h3>
                            <p className="text-center">
                                Des plongeoirs de 3, 6 et 11 mètres sont disponibles.
                            </p>
                            <Image src="images/GraphFrench.png" className="mx-auto d-block" alt="Texte alternatif de l'image" height="375px"/>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

            <h2 className="teamTitle">Notre équipe</h2>
            <Container>
                <Row>
                    <Col md={4}>
                        <Card>
                            <Image src="images/person1.jpg" alt="Texte alternatif de l'image" height="375px"/>
                            <Card.Body>
                                <Card.Title className="text-center">Ethan Grant</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted text-center">Entraîneur en chef</Card.Subtitle>
                                <Card.Text>Ethan Grant est un coach de natation très accompli et dévoué, connu pour son expertise en méthodologies d'entraînement et en mécanique des mouvements. Avec une solide expérience en natation de compétition, il permet aux athlètes d'atteindre leur plein potentiel grâce à des programmes sur mesure et un soutien indéfectible. Le leadership et l'engagement d'Ethan favorisent la croissance, la résilience et une passion profonde pour la natation au sein de son équipe.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Image src="images/person2.jpg" alt="Texte alternatif de l'image" height="375px"/>
                            <Card.Body>
                                <Card.Title className="text-center">Sophia Sterling</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted text-center">Superviseur de la piscine</Card.Subtitle>
                                <Card.Text>Sophia Sterling est une superviseure de piscine très dévouée, dotée d'un sens aigu du détail. Grâce à son expertise en matière de sécurité aquatique et à ses solides compétences en leadership, elle assure un environnement sûr et agréable pour tous. L'approche proactive et les capacités de résolution de problèmes de Sophia en font un atout inestimable pour les installations de la piscine et ses clients.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Image src="images/person3.jpg" alt="Texte alternatif de l'image" height="375px"/>
                            <Card.Body>
                                <Card.Title className="text-center">Oliver Mitchell</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted text-center">Instructeur principal</Card.Subtitle>
                                <Card.Text>Oliver Mitchell est un instructeur passionné de cours de natation, connu pour son approche patiente et son expertise globale. Axé sur les besoins individuels, il favorise un environnement propice où les étudiants de tous âges et de toutes capacités peuvent développer leur confiance et leurs compétences essentielles en natation. Le dévouement et la passion d'Oliver inspirent un amour durable de la natation chez ses étudiants.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Aproposdenous;