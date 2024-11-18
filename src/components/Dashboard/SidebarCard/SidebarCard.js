import React, { useState, useEffect } from 'react';
import { Card, Badge, Button, Modal, Form, Alert } from 'react-bootstrap';
import './SidebarCard.scss';

const SidebarCard = () => {
  const userId = localStorage.getItem('userId');
  const [firstName, setFirstName] = useState(localStorage.getItem('firstName') || '');
  const [lastName, setLastName] = useState(localStorage.getItem('lastName') || '');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [bio, setBio] = useState(localStorage.getItem('bio') || '');
  const [profilePicture, setProfilePicture] = useState(localStorage.getItem('profilePicture') || null);
  const [password, setPassword] = useState('');
  const [newEmail, setNewEmail] = useState(email);
  const [newProfilePicture, setNewProfilePicture] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Open and close modal functions
  const handleOpenModal = () => setShowModal(true);
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bio }),
      });

      if (response.ok) {
        setSuccess('Bio updated successfully!');
        localStorage.setItem('bio', bio);
      } else {
        setError('Failed to update bio');
      }
    } catch (err) {
      setError('Error updating bio');
    }
  };

  // Update Password Function
  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8888/user/${userId}/password`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        setSuccess('Password changed successfully!');
        setPassword('');
      } else {
        setError('Failed to update password');
      }
    } catch (err) {
      setError('Error updating password');
    }
  };

  // Update Email Function
  const handleUpdateEmail = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch(`http://localhost:8888/user/${userId}/email`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newEmail }),
      });

      if (response.ok) {
        setSuccess('Email updated successfully!');
        localStorage.setItem('email', newEmail);
        setEmail(newEmail);
      } else {
        setError('Failed to update email');
      }
    } catch (err) {
      setError('Error updating email');
    }
  };

  // Update Profile Picture Function
  const handleProfilePictureChange = (e) => {
    setNewProfilePicture(e.target.files[0]);
  };

  const handleUpdateProfilePicture = async (e) => {
    e.preventDefault();

    if (!newProfilePicture) return;

    const formData = new FormData();
    formData.append('profilePicture', newProfilePicture);

    try {
      const response = await fetch(`http://localhost:8888/user/${userId}/profile-picture`, {
        method: 'PUT',
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess('Profile picture updated successfully!');
        setProfilePicture(data.profilePicture);
        localStorage.setItem('profilePicture', data.profilePicture);
      } else {
        setError('Failed to update profile picture');
      }
    } catch (err) {
      setError('Error updating profile picture');
    }
  };

  // Delete Account Function
  const handleDeleteAccount = async () => {
    if (window.confirm('Are you sure you want to delete your account? This action is irreversible.')) {
      try {
        const response = await fetch(`http://localhost:8888/user/${userId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setSuccess('Account deleted successfully!');
          localStorage.clear();
          setTimeout(() => {
            window.location.href = '/';
          }, 1000);
        } else {
          setError('Failed to delete account');
        }
      } catch (err) {
        setError('Error deleting account');
      }
    }
  };

  // Render profile initials or picture
  const renderProfilePicture = () => {
    if (profilePicture) {
      let displayProfilePicture = `http://localhost:8888${profilePicture}`
      return <img src={displayProfilePicture} alt="Profile" className="profile-img" />;
    }
    return <div className="profile-initials">{firstName.charAt(0)}</div>;
  };

  return (
    <>
      <Card className="sidebar-card shadow-sm">
        <Card.Body>
          <div className="profile-section">
            {renderProfilePicture()}
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

          {/* Change Password */}
          <Form onSubmit={handleChangePassword}>
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Change Password</Form.Label>
              <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100 mb-3">Change Password</Button>
          </Form>

          {/* Update Email */}
          <Form onSubmit={handleUpdateEmail}>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Update Email</Form.Label>
              <Form.Control type="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
            </Form.Group>
            <Button variant="success" type="submit" className="w-100 mb-3">Update Email</Button>
          </Form>

          {/* Update Profile Picture */}
          <Form onSubmit={handleUpdateProfilePicture}>
            <Form.Group controlId="formProfilePicture" className="mb-3">
              <Form.Label>Update Profile Picture</Form.Label>
              <Form.Control type="file" onChange={handleProfilePictureChange} />
            </Form.Group>
            <Button variant="info" type="submit" className="w-100 mb-3">Update Profile Picture</Button>
          </Form>

          {/* Delete Account */}
          <Button variant="danger" className="w-100" onClick={handleDeleteAccount}>
            Delete Account
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SidebarCard;
