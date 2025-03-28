import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Badge, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './JobDetailsModal.scss';

const JobDetailsModal = ({ show, handleClose, job }) => {
  const [bidAmount, setBidAmount] = useState(''); 
  const [userBid, setUserBid] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const userId = localStorage.getItem('userId'); 
  const navigate = useNavigate();

  // Function to handle bid submission
  const handleBidSubmit = async (e) => {
    e.preventDefault();

    if (!bidAmount || isNaN(bidAmount) || bidAmount <= 0) {
      setErrorMessage('Please enter a valid bid amount.');
      return;
    }

    try {
      const response = await fetch(
        `https://workwave-bcdf01747233.herokuapp.com/job/listings/${job.id}/bids`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ freelancerId: userId, amount: parseFloat(bidAmount) }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Bid submitted successfully!');
        setErrorMessage('');

        // Update the userBid state immediately after submission
        setUserBid({ amount: parseFloat(bidAmount) });

        // Reset bidAmount field
        setBidAmount('');

        // Optionally navigate or close modal after a short delay
        setTimeout(() => {
          setSuccessMessage('');
          handleClose();
          navigate('/jobs');
        }, 1500);
      } else {
        setErrorMessage(data.message || 'Failed to submit bid.');
      }
    } catch (err) {
      console.error('Error submitting bid:', err);
      setErrorMessage('An error occurred while submitting the bid.');
    }
  };

  // Fetch user's bid for the job when the modal opens
  useEffect(() => {
    const fetchUserBid = async () => {
      try {
        const response = await fetch(
          `https://workwave-bcdf01747233.herokuapp.com/job/listings/${job.id}/bids/${userId}`
        );

        if (response.ok) {
          const data = await response.json();
          setUserBid(data.bid);
          setBidAmount(data.bid?.amount || ''); 
        } else {
          setUserBid(null); 
        }
      } catch (err) {
        console.error('Error fetching user bid:', err);
      }
    };

    if (job.id && userId) {
      fetchUserBid();
    }
  }, [job.id, userId]);

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{job.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {successMessage && <Alert variant="success">{successMessage}</Alert>}
        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

        {/* Image Section */}
        <div className="job-image-container mb-3">
          <img
            src={job.image || 'https://via.placeholder.com/300'}
            alt="Job"
            className="job-image"
          />
        </div>

        {/* Job Information */}
        <h5>{job.company}</h5>
        <p className="job-description">{job.description}</p>

        {/* Skills Required */}
        <h6>Skills Required</h6>
        <div className="skills-container mb-3">
          <Badge bg="primary" className="skill-badge">
            {job.jobType}
          </Badge>
        </div>

        {/* User's Existing Bid */}
        {userBid ? (
          <div>
            <h6>Your Bid</h6>
            <p className="existing-bid-amount">
              <strong>${userBid.amount}</strong>
            </p>
          </div>
        ) : (
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
        )}
      </Modal.Body>
    </Modal>
  );
};

export default JobDetailsModal;
