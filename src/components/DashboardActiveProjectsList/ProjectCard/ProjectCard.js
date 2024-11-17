import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ProjectCard.css';

const ProjectCard = ({ title, description, image, clientName, freelancerName }) => {
  return (
    <Card className="project-card shadow-sm">
      <div className="project-card-body">
        {/* Image Section */}
        <div className="project-image-container">
          <img src={image} alt="Project" className="project-image" />
        </div>

        {/* Project Information */}
        <div className="project-info">
          <h5 className="project-title">{title}</h5>
          <p className="project-description">{description}</p>
          {/* <div className="project-client-freelancer">
            <p><strong>Client:</strong> {clientName}</p>
            {freelancerName && <p><strong>Freelancer:</strong> {freelancerName}</p>}
          </div> */}
        </div>

        {/* Action Buttons */}
        <div className="project-actions">
          <Button variant="primary" className="complete-job-btn">Complete Job</Button>
          <Button variant="outline-secondary" className="cancel-job-btn">Cancel Job</Button>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
