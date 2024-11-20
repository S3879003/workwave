import React, { useEffect, useState } from 'react';
import { Modal, Button, ListGroup, Alert } from 'react-bootstrap';

const OffersModal = ({ show, handleClose, jobId, userId }) => {
  const BACKEND_API = process.env.BACKEND_API;
  const [bids, setBids] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fetch bids for the job when the modal is opened
  useEffect(() => {
    const fetchBids = async () => {
      if (show) {
        try {
          const response = await fetch(`${BACKEND_API}/job/${userId}/listings/${jobId}/bids`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
          });

          const data = await response.json();

          if (response.ok) {
            setBids(data.bids);
          } else {
            setError(data.message || 'Failed to fetch bids');
          }
        } catch (err) {
          console.error('Error fetching bids:', err);
          setError('An error occurred while fetching bids');
        }
      }
    };

    fetchBids();
  }, [show, jobId, userId]);

  const handleAcceptBid = async (freelancerId) => {
    try {
      const response = await fetch(`${BACKEND_API}/job/${userId}/listings/${jobId}/accept/${freelancerId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Freelancer accepted successfully!');
        setError('');
      } else {
        setError(data.message || 'Failed to accept the freelancer.');
      }
    } catch (err) {
      console.error('Error accepting bid:', err);
      setError('An error occurred while accepting the bid.');
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Job Offers</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {success && <Alert variant="success">{success}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}

        {bids.length > 0 ? (
          <ListGroup>
            {bids.map((offer, index) => (
              <ListGroup.Item key={index}>
                {/* Displaying freelancer's name */}
                <strong>{offer.freelancerId?.firstName} {offer.freelancerId?.lastName}</strong> - ${offer.amount}
                <Button
                  variant="success"
                  className="ms-3"
                  onClick={() => handleAcceptBid(offer.freelancerId._id)}
                >
                  Accept Bid
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <p>No offers available.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OffersModal;
