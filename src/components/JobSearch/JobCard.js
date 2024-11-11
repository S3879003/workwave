import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import './JobCard.css';

const JobCard = () => {
  return (
    <Card className="job-card shadow-sm">
      <Card.Body>
        {/* Company Information */}
        <div className="company-info mb-3">
          <h6 className="company-name">Business Incorporated Pty Ltd</h6>
          <Badge bg="info" className="top-rated">Top Rated</Badge>
        </div>

        {/* Job Image */}
        <Card.Img
          variant="top"
          src="https://via.placeholder.com/400x200"
          alt="Job"
          className="job-image"
        />

        {/* Job Description */}
        <Card.Text className="job-description mt-3">
          Looking to hire a video editor for a healthcare product advertisement
        </Card.Text>

        {/* Budget Information */}
        <div className="budget-info">
          <strong>BUDGET</strong> <span>$3000</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default JobCard;
