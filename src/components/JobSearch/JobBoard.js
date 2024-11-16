import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JobCard from './JobCard';
import JobDetailsModal from './JobDetailsModal/JobDetailsModal';
import './JobBoard.css';

const JobBoard = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // Check user access level on component mount
  useEffect(() => {
    const accessLevel = localStorage.getItem('accessLevel');
    
    // Redirect if the user is not a freelancer
    if (accessLevel !== '1') {
      navigate('/client-dashboard'); // Redirect to client dashboard or any other page
    }
  }, [navigate]);

  // Fetch all active jobs from the backend
  const fetchActiveJobs = async () => {
    try {
      const response = await fetch('http://localhost:8888/job/listings/active', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        setJobs(data.jobs);
      } else {
        setError(data.message || 'Failed to fetch active jobs');
      }
    } catch (err) {
      console.error('Error fetching active jobs:', err);
      setError('An error occurred while fetching active jobs');
    }
  };

  useEffect(() => {
    fetchActiveJobs();
  }, []);

  const handleShowModal = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
    setShowModal(false);
  };

  return (
    <div className="JobBoard">
      <h2>Available Job Listings</h2>
      {error && <p className="error-message">{error}</p>}

      {jobs.length > 0 ? (
        jobs.map((job) => (
          <JobCard
            key={job._id}
            job={{
              id: job._id,
              company: `${job.userId.firstName} ${job.userId.lastName}`,
              title: job.title,
              description: job.description,
              image: job.img,
              skills: job.skills || [],
              budget: job.budget,
              rating: 'Top Rated',
            }}
            handleShowModal={handleShowModal}
          />
        ))
      ) : (
        <p>No active job postings available.</p>
      )}

      {selectedJob && (
        <JobDetailsModal
          show={showModal}
          handleClose={handleCloseModal}
          job={selectedJob}
        />
      )}
    </div>
  );
};

export default JobBoard;
