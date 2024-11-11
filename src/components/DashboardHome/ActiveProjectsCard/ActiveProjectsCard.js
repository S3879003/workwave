import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ActiveProjectsCard.css';

const ActiveProjectsCard = () => {
  return (
    <Card className="active-projects-card shadow-sm">
      <Card.Body>
        <h6>Pending Tasks</h6>
        <Button variant="primary" className="w-100">Active Projects (5)</Button>
      </Card.Body>
    </Card>
  );
};

export default ActiveProjectsCard;
