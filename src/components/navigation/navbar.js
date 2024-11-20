import React, { useEffect, useState } from 'react';
import { Navbar as BootstrapNavbar, Container, Nav, Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Navbar.scss';

const CustomNavbar = () => {
  const BACKEND_API = process.env.BACKEND_API;
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Fetch user data (profile picture, first name, and user type) from localStorage or API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('token');

        const response = await fetch(`${BACKEND_API}/user/${userId}`, {
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

  // Function to handle logout
  const handleLogout = () => {
    // Clear localStorage and redirect to login page
    localStorage.clear();
    navigate('/');
  };

  // Function to render profile button content
  const renderProfileButton = () => {
    if (user?.profilePicture) {
      const profilePictureUrl = `${BACKEND_API}${user.profilePicture}`;
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

  // Check if the user is a freelancer
  const isFreelancer = () => {
    const accessLevel = localStorage.getItem('accessLevel');
    return accessLevel === '1';
  };

  // Check if the user is a client
  const isClient = () => {
    const accessLevel = localStorage.getItem('accessLevel');
    return accessLevel === '2';
  };

  return (
    <BootstrapNavbar className="custom-navbar">
      <Container className="d-flex align-items-center">
        {/* Left Logo Section */}
        <BootstrapNavbar.Brand className="text-white fw-bold">WorkWave</BootstrapNavbar.Brand>

        {/* Right Section with Navigation Links */}
        <Nav className="ms-auto d-flex align-items-center">
          {/* Show the Jobs link only for freelancers */}
          {isFreelancer() && (
            <Nav.Link href="/jobs" className="text-white me-3">
              Jobs
            </Nav.Link>
          )}

          {/* Show the Create Project link only for clients */}
          {isClient() && (
            <Nav.Link href="/create-project" className="text-white me-3">
              Create Project
            </Nav.Link>
          )}

          <Nav.Link href={getDashboardLink()} className="text-white me-3">
            My Dashboard
          </Nav.Link>

          {/* Profile Dropdown */}
          <Dropdown align="end">
            <Dropdown.Toggle variant="light" className="rounded-circle profile-button">
              {renderProfileButton()}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
};

export default CustomNavbar;
