import React, { useState } from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import JobDetailsModal from './JobDetailsModal/JobDetailsModal'; // Import the modal component
import './JobCard.scss';

const JobCard = ({ job, userId }) => {
  const BACKEND_API = process.env.BACKEND_API;
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Card className="job-card shadow-sm" onClick={handleShowModal}>
        <Card.Body>
          {/* Company Info */}
          <div className="company-info mb-3">
            <h6 className="company-name">{job.company}</h6>
            <Badge bg={job.rating ? 'info' : 'secondary'} className="top-rated">
              {job.rating || 'New User'}
            </Badge>
          </div>

          {/* Job Image */}
          <Card.Img
            variant="top"
            src={job.image || 'https://via.placeholder.com/300'} // Ensure an image is always displayed
            alt="Job"
            className="job-image"
          />

          {/* Job Description */}
          <Card.Text className="job-description mt-3">{job.title}</Card.Text>

          {/* Budget Info */}
          <div className="budget-info">
            <strong>BUDGET:</strong> <span>${job.budget}</span>
          </div>

          {/* View Details Button */}
          <Button variant="outline-primary" className="view-details-btn">
            View Details
          </Button>
        </Card.Body>
      </Card>

      {/* Job Details Modal */}
      <JobDetailsModal
        show={showModal}
        handleClose={handleCloseModal}
        job={job} // Pass the job details to the modal
      />
    </>
  );
};

export default JobCard;
