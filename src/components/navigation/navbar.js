import React, { useEffect, useState } from 'react';
import { Navbar as BootstrapNavbar, Container, Form, FormControl, Button, Nav } from 'react-bootstrap';
import './Navbar.scss';

const CustomNavbar = () => {
  const [user, setUser] = useState(null);

  // Fetch user data (profile picture and first name) from localStorage or API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        let userId = localStorage.getItem('userId');
        const response = await fetch(`http://localhost:8888/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        }
      } catch (err) {
        console.error('Failed to fetch user data:', err);
      }
    };

    fetchUserData();
  }, []);

  // Function to render profile button content
  const renderProfileButton = () => {
    if (user?.profilePicture) {
      // Prepend the backend URL to the profile picture path
      const profilePictureUrl = `http://localhost:8888${user.profilePicture}`;
      return <img src={profilePictureUrl} alt="Profile" className="profile-picture" />;
    } else if (user?.firstName) {
      return <span>{user.firstName.charAt(0).toUpperCase()}</span>;
    }
    return <span>U</span>; // Default fallback
  };

  return (
    <BootstrapNavbar className="custom-navbar">
      <Container className="d-flex align-items-center">
        {/* Left Logo Section */}
        <BootstrapNavbar.Brand className="text-white fw-bold">WorkWave</BootstrapNavbar.Brand>

        {/* Search Bar */}
        <Form className="d-flex mx-auto search-bar">
          <FormControl type="search" placeholder="Search For Jobs" className="me-2 rounded-pill" />
          <Button variant="info" className="rounded-circle search-button">
            <i className="bi bi-search"></i>
          </Button>
        </Form>

        {/* Right Section with Dashboard Link and Profile Icon */}
        <Nav className="ms-auto d-flex align-items-center">
          <Nav.Link className="text-white me-3">My Dashboard</Nav.Link>
          <Button variant="light" className="rounded-circle profile-button">
            {renderProfileButton()}
          </Button>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
};

export default CustomNavbar;
