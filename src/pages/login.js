import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import './LoginPage.scss';

const LoginPage = ({ onSwap }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Check if the user is already signed in
  useEffect(() => {
    const token = localStorage.getItem('token');
    const accessLevel = localStorage.getItem('accessLevel');

    if (token && accessLevel) {
      // Redirect based on access level
      if (parseInt(accessLevel) === 1) {
        navigate('/freelancer-dashboard');
      } else if (parseInt(accessLevel) === 2) {
        navigate('/client-dashboard');
      }
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the form from reloading the page
    setLoading(true);
    setError('');

    console.log('Logging in with:', { email, password });

    try {
      const response = await fetch(`https://workwave-bcdf01747233.herokuapp.com/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      console.log('Response received:', data);

      if (response.ok) {
        // Store the token and access level in local storage
        console.log('Storing in localStorage:', {
          token: data.token,
          accessLevel: data.accessLevel,
          userId: data.userId,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          bio: data.bio,
        });
        // Store the token and access level in local storage
        localStorage.setItem('token', data.token);
        localStorage.setItem('accessLevel', data.accessLevel);
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('firstName', data.firstName);
        localStorage.setItem('lastName', data.lastName);
        localStorage.setItem('email', data.email);
        localStorage.setItem('bio', data.bio);

        // Redirect based on access level
        if (data.accessLevel === 1) {
          navigate('/freelancer-dashboard');
        } else if (data.accessLevel === 2) {
          navigate('/client-dashboard');
        }
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      console.error('Error during fetch:', err);
      setError('An error occurred while signing in');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid className="min-vh-100">
      <Row className="h-100">
        <Col md={6} className="col-full-height">
          <div className="login-box p-4">
            <h2 className="text-center mb-3">LOGIN</h2>
            <p className="text-center mb-4">Sign in now to achieve greatness!</p>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleLogin}>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </Button>

              <p className="text-center">
                Don't have an account?{' '}
                <a href="/signup" onClick={onSwap}>
                  Signup
                </a>
              </p>
            </Form>
          </div>
        </Col>

        <Col md={6} className="col-full-height bg-purple">
          <Card
            className="text-center shadow col-width-m"
            style={{
              width: '425px',
              background: 'rgba(255, 255, 255, 0.22)',
              border: 'rgba(255, 255, 255, 0.22) 2px solid',
              borderRadius: '15px',
            }}
          >
            <Card.Body style={{ height: '500px' }}>
              <Card.Text className="text-white mb-4" style={{ fontSize: '1.25rem' }}>
                Achieve your goals! Login now and accomplish greatness!
              </Card.Text>
              <img src="../imgs/female.png" alt="Motivational" className="img-fluid" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
