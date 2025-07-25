import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../About/About.css';
import Skill from './Skill';
import bg1 from '/bg-img/about-bg.mp4';
import bg2 from '/bg-img/about-bg3.mp4';


const About = () => {
    return (
        <>
            {/* First About Section */}
            <div className="about">
                <Container fluid className='h-100'>
                    <Row className='h-100'>
                        <Col className='h-100'>
                            <div className="about-section">
                                <video
                                    className='about-bg'
                                    loop
                                    muted
                                    autoPlay
                                    playsInline
                                >
                                    <source src={bg1} />
                                </video>

                                <div className="about-text">
                                    <Container>
                                        <Row>
                                            <Col md={6}>
                                                <div className='about-text-left'>
                                                    <h1>About</h1>
                                                    <h6>
                                                        Hi! I'm Piyush, a frontend developer with hands-on experience in building responsive and dynamic web interfaces. I recently completed my internship at Spetric Solutions, where I worked on real-world projects using React.js, HTML, CSS, and JavaScript.
                                                    </h6>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Skill />

            {/* Second About Section */}
            <div className="about">
                <Container fluid className='h-100'>
                    <Row className='h-100'>
                        <Col className='h-100'>
                            <div className="about-section">
                                <video
                                    className='about-bg'
                                    loop
                                    muted
                                    autoPlay
                                    playsInline
                                >
                                    <source src={bg2} />
                                </video>

                                <div className="about-text">
                                    <Container>
                                        <Row>
                                            <Col md={6} className='p-0'>
                                                <video
                                                    className='about-bg-right'
                                                    autoPlay
                                                    muted
                                                    loop
                                                    playsInline
                                                >
                                                    <source src='/bg-img/about -right-bg.mp4' />
                                                </video>
                                            </Col>

                                            <Col md={6}>
                                                <div className='about-text-right'>
                                                    <h6>
                                                        I'm deeply passionate about web development and continuously learning new technologies to become a full-stack developer. I love turning creative ideas into interactive websites and writing clean, maintainable code.

                                                        Apart from coding, I focus on improving my communication skills and personal growth. I'm always excited to collaborate on meaningful projects.
                                                    </h6>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default About
