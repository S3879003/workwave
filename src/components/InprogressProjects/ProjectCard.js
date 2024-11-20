import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ProjectCard.scss';

const ProjectCard = ({ jobid, userId, title, description, image, onComplete, onCancel }) => {
  const handleCompleteJob = async () => {
    try {
      const response = await fetch(`${BACKEND_API}/job/${userId}/listings/${jobid}/complete`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        alert('Job marked as complete!');
        window.location.reload();
      }
    } catch (err) {
      alert('An error occurred while completing the job');
    }
  };

  const handleCancelJob = async () => {
    if (window.confirm('Are you sure you want to cancel this job?')) {
      try {
        const response = await fetch(`${BACKEND_API}/job/${userId}/listings/${jobid}/delete`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
          alert('Job deleted successfully');
          window.location.reload();
        }
      } catch (err) {
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
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="project-actions">
          <Button variant="primary" onClick={handleCompleteJob}>
            Complete Job
          </Button>
          <Button variant="outline-secondary" onClick={handleCancelJob}>
            Cancel Job
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
