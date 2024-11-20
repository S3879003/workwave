import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import OffersModal from '../OffersModal/OffersModal';
import './CurrentJobCard.scss';

const JobCard = ({ job, userId }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Card className="job-post-card shadow-sm">
        <Card.Body>
          {/* Display the job owner's name */}
          <h6>
            {`${job.userId.firstName} ${job.userId.lastName}`} 
          </h6>

          {/* Job Image */}
          <Card.Img variant="top" src={job.img} className="job-image" />

          {/* Job Title and Budget */}
          <Card.Title className="mt-3">{job.title}</Card.Title>
          <div className="job-budget">
            <strong>Budget:</strong> ${job.budget}
          </div>

          {/* Button to view offers */}
          <Button variant="outline-primary" className="view-offers-btn mt-3" onClick={handleShowModal}>
            View Offers
          </Button>
        </Card.Body>
      </Card>

      {/* Offers Modal */}
      <OffersModal
        show={showModal}
        handleClose={handleCloseModal}
        jobId={job._id}
        userId={userId}
      />
    </>
  );
};

export default JobCard;
