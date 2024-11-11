import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import './SidebarCard.css';

const SidebarCard = () => {
  return (
    <Card className="sidebar-card shadow-sm">
      <Card.Body>
        <div className="profile-section">
          <div className="profile-picture">M</div>
          <div className="profile-info">
            <h6>Matthew Rosin</h6>
            <Badge bg="info">Top Rated</Badge>
          </div>
        </div>
        <p className="profile-description">
          I am a passionate freelancer who is looking to provide high quality services to my clients.
        </p>
        <div className="skills-section">
          <Button variant="outline-primary" size="sm" className="skill-button">UX Designer</Button>
          <Button variant="outline-primary" size="sm" className="skill-button">Software Engineer</Button>
          <Button variant="outline-primary" size="sm" className="skill-button">Database Engineer</Button>
        </div>
        <hr />
        <p className="account-settings">Account Settings</p>
      </Card.Body>
    </Card>
  );
};

export default SidebarCard;
