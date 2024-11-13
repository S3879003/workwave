import React from 'react';
import { Modal, Button, Form, Badge } from 'react-bootstrap';
import './JobDetailsModal.css';

const JobDetailsModal = ({ show, handleClose, job }) => {
  if (!job) return null;

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{job.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
          {job.skills.map((skill, index) => (
            <Badge bg="primary" key={index} className="skill-badge">
              {skill}
            </Badge>
          ))}
        </div>

        {/* Offer Amount */}
        <Form.Group className="mb-3">
          <Form.Label>Offer Amount</Form.Label>
          <Form.Control type="number" placeholder="$0.00" />
          <Form.Text className="text-muted">
            How much you're willing to do the job for
          </Form.Text>
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" className="submit-offer-btn">Submit Offer</Button>
      </Modal.Body>
    </Modal>
  );
};

export default JobDetailsModal;
