import React from 'react';
import '../Hire me/Contact.css';
import { Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
  return (
    <>
      {/* Section with background video */}
      <div className="section-hire py-md-3 px-md-2">
        <Container fluid className="h-100">
          <Row className="h-100">
            <Col className="h-100">
              <div className="hero-hire">
                <video
                  className="bg-video-hire"
                  loop
                  muted
                  autoPlay
                  playsInline
                >
                  <source src="/bg-img/about-bg2.mp4" type="video/mp4" />
                </video>
                <div className="over-play-hire">
                  <Container className="h-100">
                    <Row className="h-100">
                      <Col md={6}>
                        <div className="name-hire text-white">
                          <h1>Hire Me</h1>
                          <h2>Available for Freelance, Internship or Full-time</h2>
                          <h5>
                            I’m a passionate frontend developer skilled in React, Bootstrap & creative problem solving.
                            Let’s build something amazing together!
                          </h5>
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

      {/* Contact call-to-action section */}
      <section className='contact'>
        <div className="container text-center text-white">
          <h2 className="mb-3">Interested in Working Together?</h2>
          <p className="mb-4 text-light">
            Whether you're looking for a passionate frontend developer, a creative mind, or someone who just gets things done — I’m ready to collaborate. Drop a message, and let’s talk!
          </p>
          <h4 className="mb-3">📞 637-114-9273</h4>
          <a
            href="https://www.linkedin.com/in/piyush-gond-55a6a9340/"
            className="btn btn-primary px-4 py-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
