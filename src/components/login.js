import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <Container fluid className="min-vh-100">
      <Row className="h-100">
        <Col md={6} className="col-full-height">
          <div className="login-box p-4">
            <h2 className="text-center mb-3">LOGIN</h2>
            <p className="text-center mb-4">Sign in now to achieve greatness!</p>
            <Form>
              <Form.Group controlId="formUsername" className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mb-3">
                Login Now
              </Button>

              <p className="text-center">
                Don’t have an account? <a href="#signup">Sign up</a>
              </p>
            </Form>
          </div>
        </Col>

        <Col md={6} className="col-full-height bg-purple">
          <Card className="text-center shadow"
                      style={{
                        width: '80%',
                        background: 'rgba(255, 255, 255, 0.22)', // White background with 22% opacity
                        border: 'rgba(255, 255, 255, 0.22) 2px solid',
                        borderRadius: '15px'
                      }}
          >
            <Card.Body style={{height: '500px'}}>
              <Card.Text className="text-white mb-4" style={{ fontSize: '1.25rem' }}>
                Achieve your goals! Login now and accomplish greatness!
              </Card.Text>
              <img src="https://via.placeholder.com/150" alt="Motivational" className="img-fluid rounded-circle" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
