import React, { useCallback, useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './InProgressProjectsCard.scss';

const InProgressProjectsCard = () => {
  const [ongoingJobsCount, setOngoingJobsCount] = useState(0); 
  const navigate = useNavigate();

  const userId = localStorage.getItem('userId');

  // Function to fetch the number of ongoing jobs
  const fetchActiveJobs = useCallback(async () => {
    try {
      const response = await fetch(`https://workwave-bcdf01747233.herokuapp.com/job/${userId}/ongoing`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setOngoingJobsCount(data.projects.length);
      } else {
        console.error('Failed to fetch ongoing jobs count');
        setOngoingJobsCount(0);
      }
    } catch (err) {
      console.error('Error fetching ongoing jobs count:', err);
      setOngoingJobsCount(0); 
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      fetchActiveJobs();
    }
  }, [fetchActiveJobs, userId]);

  const handleRedirect = () => {
    navigate('/ongoing-projects');
  };

  return (
    <Card className="active-projects-card shadow-sm">
      <Card.Body>
        <h6>Jobs still being worked on</h6>
        <h4>In progress jobs ({ongoingJobsCount})</h4>
        <Button variant="primary" className="w-100" onClick={handleRedirect}>
          View your Projects
        </Button>
      </Card.Body>
    </Card>
  );
};

export default InProgressProjectsCard;
