import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import './LoginPage.scss';

const SignUpPage = ({ onSwap }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accessLevel, setAccessLevel] = useState(1); // Default to freelancer
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:8888/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          accessLevel,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          window.location.href = '/';
        }, 1000);
      } else {
        setError(data.message || 'Failed to sign up');
      }
    } catch (err) {
      console.error('Error during fetch:', err);
      setError('An error occurred while signing up');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid className="min-vh-100">
      <Row className="h-100">
        <Col md={6} className="col-full-height">
          <div className="login-box p-4">
            <h2 className="text-center mb-3">SIGN UP</h2>
            <p className="text-center mb-4">Sign up now to achieve greatness!</p>

            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">Account created successfully! Redirecting...</Alert>}

            <Form onSubmit={handleSignUp}>
              <Form.Group controlId="formFirstName" className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formLastName" className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
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

              <Form.Group controlId="formConfirmPassword" className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formAccessLevel" className="mb-4">
                <Form.Label>Account Type</Form.Label>
                <Form.Select
                  value={accessLevel}
                  onChange={(e) => setAccessLevel(parseInt(e.target.value))}
                >
                  <option value={1}>Freelancer</option>
                  <option value={2}>Client</option>
                </Form.Select>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mb-3" disabled={loading}>
                {loading ? 'Signing up...' : 'Sign Up'}
              </Button>

              <p className="text-center">
                Already have an account?{' '}
                <a href="/" onClick={onSwap}>
                  Login
                </a>
              </p>
            </Form>
          </div>
        </Col>

        <Col md={6} className="col-full-height bg-purple">
          <Card className="text-center shadow" style={{ width: '80%', background: 'rgba(255, 255, 255, 0.22)', borderRadius: '15px' }}>
            <Card.Body style={{ height: '500px' }}>
              <Card.Text className="text-white mb-4" style={{ fontSize: '1.25rem' }}>
                Achieve your goals! Sign up now and accomplish greatness!
              </Card.Text>
              <img src="https://via.placeholder.com/150" alt="Motivational" className="img-fluid rounded-circle" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpPage;
