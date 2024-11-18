import React, { useEffect, useState } from 'react';
import { Navbar as BootstrapNavbar, Container, Button, Nav } from 'react-bootstrap';
import './Navbar.scss';

const CustomNavbar = () => {
  const [user, setUser] = useState(null);

  // Fetch user data (profile picture, first name, and user type) from localStorage or API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('token');

        const response = await fetch(`http://localhost:8888/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
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
      const profilePictureUrl = `http://localhost:8888${user.profilePicture}`;
      return <img src={profilePictureUrl} alt="Profile" className="profile-picture" />;
    } else if (user?.firstName) {
      return <span>{user.firstName.charAt(0).toUpperCase()}</span>;
    }
    return <span>U</span>;
  };

  // Determine the dashboard link based on user type
  const getDashboardLink = () => {
    const accessLevel = localStorage.getItem('accessLevel');
    
    if (accessLevel === '2') {
      return '/client-dashboard';
    } else if (accessLevel === '1') {
      return '/freelancer-dashboard';
    }
    return '/dashboard';
  };

  return (
    <BootstrapNavbar className="custom-navbar">
      <Container className="d-flex align-items-center">
        {/* Left Logo Section */}
        <BootstrapNavbar.Brand className="text-white fw-bold">WorkWave</BootstrapNavbar.Brand>

        {/* Right Section with Dashboard Link and Profile Icon */}
        <Nav className="ms-auto d-flex align-items-center">
          <Nav.Link href={getDashboardLink()} className="text-white me-3">
            My Dashboard
          </Nav.Link>
          <Button variant="light" className="rounded-circle profile-button">
            {renderProfileButton()}
          </Button>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
};

export default CustomNavbar;
