import React, { useState } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import OffersModal from '../OffersModal/OffersModal';
import './CurrentJobCard.css';

const JobCard = ({ company, title, image, rating, offers }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Card className="job-post-card shadow-sm">
        <Card.Body>
          <h6>{company} <Badge bg={rating ? "info" : "secondary"}>{rating || "New User"}</Badge></h6>
          <Card.Img variant="top" src={image} className="job-image" />
          <Card.Title className="mt-3">{title}</Card.Title>
          <Button variant="outline-primary" className="view-offers-btn" onClick={handleShowModal}>
            View Offers
          </Button>
        </Card.Body>
      </Card>

      {/* Offers Modal */}
      <OffersModal show={showModal} handleClose={handleCloseModal} offers={offers} />
    </>
  );
};

export default JobCard;
