import React from 'react';
import { Modal, Button, ListGroup, Badge } from 'react-bootstrap';
import './OffersModal.css';

const OffersModal = ({ show, handleClose, offers }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Offers</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup variant="flush">
          {offers.map((offer, index) => (
            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div className="profile-picture">{offer.initials}</div>
                <div className="ms-3">
                  <h6>{offer.name} <Badge bg="info">{offer.rating} ★</Badge></h6>
                  <p className="text-muted">@{offer.username}</p>
                </div>
              </div>
              <div>
                <p>Bid Price: <strong>${offer.price}</strong></p>
                <Button variant="success" size="sm" className="me-2">Accept</Button>
                <Button variant="outline-danger" size="sm">Decline</Button>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OffersModal;
