import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '/src/Components/Home/Section2.css'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from 'gsap/all';



const Section2 = () => {
  const containerRef = React.useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(containerRef.current.querySelectorAll("h1"), {
      transform: "rotatex(-90deg)",
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        // markers: true,
        start: "top 90%",
        end: "bottom 90%",
        scrub: 2,
      },
    });
    ScrollTrigger.refresh();
  }, { scope: containerRef });


  return (



    <>
      <Container fluid className='py-5' ref={containerRef}>
        <Row>
          <Col>
            <div className="text1">
              <div className="scrolling-text">
                <h3>CODE IS LOGIC AND CREATIVITY COMBINED || CODE IS LOGIC AND CREATIVITY COMBINED || CODE IS LOGIC AND CREATIVITY COMBINED</h3>
              </div>
            </div>
            <div className="text2">
              <h1>WEB</h1>
              <h1>DEVELOPMENT</h1>
              <h1>ISN'T JUST</h1>
              <h1>CODE </h1>
              <h1>IT'S</h1>
              <h1>CREATION!</h1>
            </div>
          </Col>
        </Row>
      </Container></>
  );
};

export default Section2;
