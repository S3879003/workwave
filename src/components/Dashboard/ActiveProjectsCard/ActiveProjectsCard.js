import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ActiveProjectsCard.scss';

const ActiveProjectsCard = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/active-projects');
  };

  return (
    <Card className="active-projects-card shadow-sm">
      <Card.Body>
        <h6>Pending Tasks</h6>
        <Button variant="primary" className="w-100" onClick={handleRedirect}>
          Active Projects (5)
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ActiveProjectsCard;
