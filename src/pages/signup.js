import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import './LoginPage.scss';

const SignUpPage = ({ onSwap }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [accessLevel, setAccessLevel] = useState(1);
  const [profilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle file input change
  const handleProfilePictureChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  // Handle signup form submission
  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate passwords
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    // Create FormData object
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('accessLevel', accessLevel);
    if (profilePicture) {
      formData.append('profilePicture', profilePicture);
    }

    try {
      // Make a POST request to the signup endpoint
      const response = await fetch('http://localhost:8888/auth/signup', {
        method: 'POST',
        body: formData,
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
                <Form.Control type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
              </Form.Group>

              <Form.Group controlId="formLastName" className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </Form.Group>

              <Form.Group controlId="formConfirmPassword" className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              </Form.Group>

              <Form.Group controlId="formProfilePicture" className="mb-3">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control type="file" accept="image/*" onChange={handleProfilePictureChange} />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mb-3" disabled={loading}>
                {loading ? 'Signing up...' : 'Sign Up'}
              </Button>

              <p className="text-center">
                Already have an account? <a href="/" onClick={onSwap}>Login</a>
              </p>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpPage;
