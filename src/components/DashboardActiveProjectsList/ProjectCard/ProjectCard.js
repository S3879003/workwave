import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ProjectCard.css';

const ProjectCard = ({ title, description, image }) => {
  return (
    <Card className="project-card shadow-sm">
      <div className="project-card-content">
        <Card.Img variant="top" src={image} className="project-image" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="button-group">
            <Button variant="success" className="complete-btn">Complete Job</Button>
            <Button variant="outline-danger" className="cancel-btn">Cancel Job</Button>
          </div>
        </Card.Body>
      </div>
    </Card>
  );
};

export default ProjectCard;
