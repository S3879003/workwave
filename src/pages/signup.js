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
  const [profilePreview, setProfilePreview] = useState(null); // Preview for the profile picture
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle file input change and create a preview
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file);
      setProfilePreview(URL.createObjectURL(file)); // Generate preview URL
    }
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
      // Modify the file path to ensure it starts with "/"
      const fileName = profilePicture.name;
      const updatedFileName = fileName.startsWith('/') ? fileName : `/${fileName}`;
      const updatedFile = new File([profilePicture], updatedFileName, {
        type: profilePicture.type,
      });
  
      formData.append('profilePicture', updatedFile);
    }
  
    try {
      // Make a POST request to the signup endpoint
      const response = await fetch(`https://workwave-bcdf01747233.herokuapp.com/auth/signup`, {
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
              {/* Profile Picture Preview */}
              {profilePreview && (
                <div className="mb-3 text-center">
                  <img
                    src={profilePreview}
                    alt="Profile Preview"
                    className="img-fluid rounded-circle"
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                </div>
              )}

              <Form.Group controlId="formProfilePicture" className="mb-3">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control type="file" accept="image/*" onChange={handleProfilePictureChange} />
              </Form.Group>

              <Form.Group controlId="formFirstName" className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formLastName" className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formConfirmPassword" className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formAccessLevel" className="mb-3">
                <Form.Label>Account Type</Form.Label>
                <Form.Control
                  as="select"
                  value={accessLevel}
                  onChange={(e) => setAccessLevel(Number(e.target.value))}
                  required
                >
                  <option value={1}>Freelancer</option>
                  <option value={2}>Client</option>
                </Form.Control>
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
              <img src="../imgs/male.png" alt="Motivational" className="img-fluid login-img" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpPage;
