import React from 'react';
import { Navbar as BootstrapNavbar, Container, Form, FormControl, Button, Nav, Navbar } from 'react-bootstrap';
import './Navbar.scss';

const CustomNavbar = () => {
  return (
    <Navbar className="custom-navbar">
      <Container className="d-flex align-items-center">
        {/* Left Logo Section */}
        <BootstrapNavbar.Brand className="text-white fw-bold">WorkWave</BootstrapNavbar.Brand>

        {/* Search Bar */}
        <Form className="d-flex mx-auto search-bar">
          <FormControl
            type="search"
            placeholder="Search For Jobs"
            className="me-2 rounded-pill"
          />
          <Button variant="info" className="rounded-circle search-button">
            <i className="bi bi-search"></i>
          </Button>
        </Form>

        {/* Right Section with Dashboard Link and Profile Icon */}
        <Nav className="ms-auto d-flex align-items-center">
          <Nav.Link className="text-white me-3">My Dashboard</Nav.Link>
          <Button variant="light" className="rounded-circle profile-button">M</Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
