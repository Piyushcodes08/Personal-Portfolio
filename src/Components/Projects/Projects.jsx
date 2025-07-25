import React from 'react'
import '../Home/Home.css';
import '../Projects/Projects.css'
import { Col, Container, Row } from 'react-bootstrap';
import Projectlist from './Projectlist';

const Projects = () => {
  return (
    <>
      <div className="project-section py-md-3 px-md-2">
        <Container fluid className="h-100">
          <Row className="h-100">
            <Col className="h-100">
              <div className="project-hero">
                <video
                  className="bg-project"
                  loop
                  muted
                  autoPlay
                  playsInline
                >
                  <source src="src/assets/bg-img/project-bg.mp4" />
                </video>
                <div className="over-play">
                  <Container>
                    <Row>
                      <Col md={6}>
                        <div className="project-name text-white pb-4">
                          <h1 className="text-uppercase">My Projects, Meri Pehchaan 💻</h1>
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
      <Projectlist />
     <div className="project-section py-md-3 px-md-2">
        <Container fluid className="h-100">
          <Row className="h-100">
            <Col className="h-100">
              <div className="project-hero">
                <video
                  className="bg-project"
                  loop
                  muted
                  autoPlay
                  playsInline
                >
                  <source src="src/assets/bg-img/project-right-bg.mp4" />
                </video>
                <div className="over-play">
                  <Container>
                    <Row>
                      <Col md={6}>
                        <div className="project-name text-white pb-4">
                          <h4>These projects represent my journey as a frontend developer. From landing pages to responsive UIs, everything is built with clean code, React js, Bootstrap, Tailwind styling, and a developer's mindset. Dive in!</h4>
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

export default Projects
