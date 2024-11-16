import React, { useEffect, useState } from 'react';
import JobCard from '../CurrentJobCard/CurrentJobCard';
import './JobCardList.css';

const JobPostsList = () => {
  const [jobPosts, setJobPosts] = useState([]);
  const [error, setError] = useState('');

  const userId = localStorage.getItem('userId');

  const fetchActiveJobs = async () => {
    try {
      const response = await fetch(`http://localhost:8888/job/${userId}/listings/active`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();

      if (response.ok) {
        setJobPosts(data.jobs);
      } else {
        setError(data.message || 'Failed to fetch active jobs');
      }
    } catch (err) {
      console.error('Error fetching active jobs:', err);
      setError('An error occurred while fetching active jobs');
    }
  };

  useEffect(() => {
    if (userId) {
      fetchActiveJobs();
    }
  }, [userId]);

  return (
    <div className="job-posts-list">
      <h2>Current Job Posts</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="job-cards">
        {jobPosts.length > 0 ? (
          jobPosts.map((post, index) => (
            <JobCard
              key={index}
              company={`${post.userId.firstName} ${post.userId.lastName}`}
              title={post.title}
              image={post.img}
              rating="Top Rated"
              offers={post.offers || []}
            />
          ))
        ) : (
          <p>No active job posts found.</p>
        )}
      </div>
    </div>
  );
};

export default JobPostsList;
