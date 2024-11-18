import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import './JobCard.scss';

const JobCard = ({ job, handleShowModal }) => {
  return (
    <Card className="job-card shadow-sm" onClick={() => handleShowModal(job)}>
      <Card.Body>
        <div className="company-info mb-3">
          <h6 className="company-name">{job.company}</h6>
          <Badge bg={job.rating ? "info" : "secondary"} className="top-rated">
            {job.rating || 'New User'}
          </Badge>
        </div>

        <Card.Img variant="top" src={job.image} alt="Job" className="job-image" />

        <Card.Text className="job-description mt-3">{job.title}</Card.Text>

        <div className="budget-info">
          <strong>BUDGET</strong> <span>${job.budget}</span>
        </div>

        <Button variant="outline-primary" className="view-details-btn">
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default JobCard;
