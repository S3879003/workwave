import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ProjectCard.css';

const ProjectCard = ({ jobId, userId, title, description, image, clientName, freelancerName, onComplete, onCancel }) => {
  // Function to handle marking the job as complete
  const handleCompleteJob = async () => {
    try {
      const response = await fetch(`http://localhost:8888/job/${userId}/listings/${jobId}/complete`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();
      if (response.ok) {
        alert('Job marked as complete!');
        onComplete(jobId);
      } else {
        alert(data.message || 'Failed to mark job as complete');
      }
    } catch (err) {
      console.error('Error completing job:', err);
      alert('An error occurred while completing the job');
    }
  };

  // Function to handle deleting the job
  const handleCancelJob = async () => {
    if (window.confirm('Are you sure you want to cancel this job?')) {
      try {
        const response = await fetch(`http://localhost:8888/job/${userId}/listings/${jobId}/delete`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        });

        const data = await response.json();
        if (response.ok) {
          alert('Job deleted successfully');
          onCancel(jobId);
        } else {
          alert(data.message || 'Failed to delete job');
        }
      } catch (err) {
        console.error('Error deleting job:', err);
        alert('An error occurred while deleting the job');
      }
    }
  };

  return (
    <Card className="project-card shadow-sm">
      <div className="project-card-body">
        <div className="project-image-container">
          <img src={image} alt="Project" className="project-image" />
        </div>
        <div className="project-info">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
        <div className="project-actions">
          <Button variant="primary" onClick={handleCompleteJob}>Complete Job</Button>
          <Button variant="outline-secondary" onClick={handleCancelJob}>Cancel Job</Button>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
