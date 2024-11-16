import React, { useState, useEffect } from 'react';
import { Card, Badge, Button, Modal, Form, Alert } from 'react-bootstrap';
import './SidebarCard.css';

const SidebarCard = () => {
  // Retrieve user info from localStorage
  const userId = localStorage.getItem('userId');
  const [firstName, setFirstName] = useState(localStorage.getItem('firstName') || '');
  const [lastName, setLastName] = useState(localStorage.getItem('lastName') || '');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [bio, setBio] = useState(localStorage.getItem('bio') || '');
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Function to handle opening the modal
  const handleOpenModal = () => setShowModal(true);

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setShowModal(false);
    setError('');
    setSuccess('');
  };

  // Update Bio Function
  const handleUpdateBio = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch(`http://localhost:8888/user/${userId}/bio`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bio }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Bio updated successfully!');
        localStorage.setItem('bio', bio); // Update localStorage
      } else {
        setError(data.message || 'Failed to update bio');
      }
    } catch (err) {
      console.error('Error updating bio:', err);
      setError('An error occurred while updating bio');
    }
  };

  // Update Password Function
  const handleChangePassword = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8888/user/${userId}/password`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Password changed successfully!');
        setPassword('');
      } else {
        setError(data.message || 'Failed to update password');
      }
    } catch (err) {
      console.error('Error updating password:', err);
      setError('An error occurred while updating password');
    }
  };

  // Handle deleting account
  const handleDeleteAccount = async () => {
    if (window.confirm('Are you sure you want to delete your account? This action is irreversible.')) {
      localStorage.clear();
      setSuccess('Account deleted successfully!');
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    }
  };

  // Generate initials for the profile picture
  const getInitials = () => `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();

  return (
    <>
      <Card className="sidebar-card shadow-sm">
        <Card.Body>
          <div className="profile-section">
            <div className="profile-picture">{getInitials()}</div>
            <div className="profile-info">
              <h6>{`${firstName} ${lastName}`}</h6>
              <Badge bg="info">Top Rated</Badge>
            </div>
          </div>
          <p className="profile-description">{bio}</p>
          <p className="profile-email"><strong>Email:</strong> {email}</p>
          <hr />
          <Button variant="link" className="account-settings" onClick={handleOpenModal}>
            Account Settings
          </Button>
        </Card.Body>
      </Card>

      {/* Account Settings Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Account Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}

          {/* Change Password Section */}
          <Form onSubmit={handleChangePassword}>
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Change Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mb-3">
              Change Password
            </Button>
          </Form>

          {/* Update Bio Section */}
          <Form onSubmit={handleUpdateBio}>
            <Form.Group controlId="formBio" className="mb-3">
              <Form.Label>Update Bio</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </Form.Group>
            <Button variant="success" type="submit" className="w-100 mb-3">
              Update Bio
            </Button>
          </Form>

          {/* Delete Account Button */}
          <Button variant="danger" className="w-100" onClick={handleDeleteAccount}>
            Delete Account
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SidebarCard;
