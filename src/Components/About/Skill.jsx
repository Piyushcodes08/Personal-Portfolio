import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../About/Skill.css';
import bgVideo from '../../assets/bg-img/about-bg2.mp4';

const Skill = () => {
  const skills = [
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
    {
      name: 'Bootstrap',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    },
    {
      name: 'Tailwind CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    },
    //  {
    //   name: 'HTML5',
    //   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    // },
     {
      name: 'CSS3',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
  ];

  return (
    <div className="py-md-3 px-md-3 skill">
      <Container className="skillset-container">
        <h2>
          Professional <span className="highlight">Skillset</span>
        </h2>
        <Row className="mt-4 justify-content-center">
          {skills.map((skill, index) => (
            <Col
              key={index}
              xs={6}
              sm={4}
              md={3}
              lg={2}
              className="d-flex justify-content-center mb-4"
            >
              <div className="skill-box">
                <img src={skill.icon} alt={skill.name} />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Skill;
