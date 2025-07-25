import React from 'react';
import '../Home/Home.css';
import { Col, Container, Row } from 'react-bootstrap';
import Section2 from '/src/Components/Home/Section2.jsx';
import bg from "/bg-img/project-bg.mp4"


const Home = () => {
  return (
    <>
      <div className="section1 py-md-3 px-md-2">
        <Container fluid className="h-100">
          <Row className="h-100">
            <Col className="h-100">
              <div className="hero">
                <video
                  className="bg-video"
                  loop
                  muted
                  autoPlay
                  playsInline
                >
                  <source src={bg} />
                </video>
                <div className="over-play">
                  <Container>
                    <Row>
                      <Col>
                        <div className="name text-white projects">
                          <h2>Hi, I'm 👋🏻</h2>
                          <h1 className="text-uppercase">Piyush Gond</h1>
                          <h4>
                            Web Developer crafting clean and modern web
                            experiences.
                          </h4>
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
      <Section2 />

    </>
  );
};

export default Home;
