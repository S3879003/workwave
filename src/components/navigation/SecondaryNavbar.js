import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import './SecondaryNavbar.css';

const SecondaryNavbar = () => {
  return (
    <div className="secondary-navbar">
      <Container>
        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link href="#graphics-design">Graphics & Design</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#digital-marketing">Digital Marketing</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#writing-translation">Writing & Translation</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#video-animation">Video & Animation</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#music-audio">Music & Audio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#programming-tech">Programming & Tech</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#photography">Photography</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#business">Business</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </div>
  );
};

export default SecondaryNavbar;
