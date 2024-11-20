import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './InProgressProjectsCard.scss';

const InProgressProjectsCard = () => {
  const [ongoingJobsCount, setOngoingJobsCount] = useState(0); // State to store the number of ongoing jobs
  const navigate = useNavigate();

  const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage

  // Function to fetch the number of ongoing jobs
  const fetchOngoingJobsCount = async () => {
    try {
      const response = await fetch(`${BACKEND_API}/job/${userId}/ongoing`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setOngoingJobsCount(data.projects.length); // Set the count to the number of projects
      } else {
        console.error('Failed to fetch ongoing jobs count');
        setOngoingJobsCount(0); // Default to 0 in case of error
      }
    } catch (err) {
      console.error('Error fetching ongoing jobs count:', err);
      setOngoingJobsCount(0); // Default to 0 in case of error
    }
  };

  useEffect(() => {
    if (userId) {
      fetchOngoingJobsCount(); // Fetch data when the component mounts
    }
  }, [userId]);

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
