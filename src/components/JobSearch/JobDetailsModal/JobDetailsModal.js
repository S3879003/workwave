import React, { useState } from 'react';
import { Modal, Button, Form, Badge, Alert } from 'react-bootstrap';
import './JobDetailsModal.css';

const JobDetailsModal = ({ show, handleClose, job }) => {
  const [bidAmount, setBidAmount] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const userId = localStorage.getItem('userId'); // Freelancer's ID

  if (!job) return null;

  // Function to handle bid submission
  const handleBidSubmit = async (e) => {
    e.preventDefault();

    if (!bidAmount || isNaN(bidAmount) || bidAmount <= 0) {
      setErrorMessage('Please enter a valid bid amount.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8888/job/${userId}/listings/${job.id}/bid`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: parseFloat(bidAmount) }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Bid submitted successfully!');
        setBidAmount('');
        setErrorMessage('');
      } else {
        setErrorMessage(data.message || 'Failed to submit bid.');
      }
    } catch (err) {
      console.error('Error submitting bid:', err);
      setErrorMessage('An error occurred while submitting the bid.');
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{job.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {successMessage && <Alert variant="success">{successMessage}</Alert>}
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

        {/* Image Section */}
        <div className="job-image-container">
          <img src={job.image} alt="Job" className="job-image" />
        </div>

        {/* Job Information */}
        <h5>{job.company}</h5>
        <p className="job-description">{job.description}</p>

        {/* Skills Required */}
        <h6>Skills Required</h6>
        <div className="skills-container">
          {job.skills && job.skills.map((skill, index) => (
            <Badge bg="primary" key={index} className="skill-badge">
              {skill}
            </Badge>
          ))}
        </div>

        {/* Offer Amount Form */}
        <Form onSubmit={handleBidSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Offer Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="$0.00"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
            />
            <Form.Text className="text-muted">
              How much you're willing to do the job for
            </Form.Text>
          </Form.Group>

          {/* Submit Button */}
          <Button variant="primary" type="submit" className="submit-offer-btn">
            Submit Offer
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default JobDetailsModal;
