import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../Projects/Projects.css'
const Projectlist = () => {
  return (
    <section>
      <Container>
        <h1 className="text-white text-center mb-4">My Recent Works 💻</h1>
        <p className="text-light text-center mb-5">
          Here are a few projects i've worked on recently. Explore below!
        </p>

        <Row className="g-4 justify-content-center">
 {/* Project 1 */}
          <Col xs={12} md={6}>
            <Card bg="dark" text="white" className="h-100 shadow">
              <Card.Body>
                <Card.Title>Software Company</Card.Title>
                <Card.Text>
               “Softwaare: A modern travel solutions platform built with React, Tailwind CSS, and Vite, offering responsive and interactive user experiences.”
                </Card.Text>
                <Button
                 
                  href="https://softwaare.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Project
                </Button>
              </Card.Body>
            </Card>
          </Col>

 {/* Project 2 */}
          <Col xs={12} md={6}>
            <Card bg="dark" text="white" className="h-100 shadow">
              <Card.Body>
                <Card.Title>Trawind Tours and Travel Agency</Card.Title>
                <Card.Text>
                "Trawind is a modern travel website built using React and Custom CSS.
                </Card.Text>
                <Button
                 
                  href="https://trawind.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Project
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Project 3 */}
          <Col xs={12} md={6}>
            <Card bg="dark" text="white" className="h-100 shadow">
              <Card.Body>
                <Card.Title> Food Delivery UI</Card.Title>
                <Card.Text>
                  A modern restaurant website built with React and Bootstrap showing menu items and a clean layout.
                </Card.Text>
                <Button
                  // variant="primary"
                  href="https://new-burger.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Project
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Project 3 */}
          <Col xs={12} md={6}>
            <Card bg="dark" text="white" className="h-100 shadow">
              <Card.Body>
                <Card.Title>Restaurant Food Website</Card.Title>
                <Card.Text>
                  A responsive food delivery app UI built with React and Bootstrap featuring categories and clean design.
                </Card.Text>
                <Button
                  // variant="primary"
                  href="https://resfoodwebsite.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projectlist;
