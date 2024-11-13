import React from 'react';
import JobCard from '../CurrentJobCard/CurrentJobCard';
import './JobCardList.css';

const JobPostsList = () => {
    const jobPosts = [
        {
          company: 'Business Incorporated Pty Ltd',
          title: 'Looking to hire a video editor for a healthcare product advertisement',
          image: 'https://via.placeholder.com/400x200',
          rating: 'Top Rated',
          offers: [
            { initials: 'MR', name: 'Matthew Rosin', username: 'mrosin', rating: 3.5, price: 250 },
            { initials: 'JD', name: 'Jane Doe', username: 'jdoe', rating: 4.2, price: 300 },
            { initials: 'JT', name: 'Timmy T', username: 'TimmyT', rating: 4.6, price: 150 },
          ],
        },
        {
          company: 'Corporate Incorporated Pty Ltd',
          title: 'Looking to hire a graphic designer for a new brand logo',
          image: 'https://via.placeholder.com/400x200',
          rating: 'Top Rated',
          offers: [
            { initials: 'SJ', name: 'Steve Jobs', username: 'Steve_Jobs', rating: 5, price: 700 },
            { initials: 'JD', name: 'John Doe', username: 'John_Doe', rating: 4.0, price: 450 },
          ],
        },
      ];
    
      return (
        <div className="job-posts-list">
          <h2>Current Job Posts</h2>
          <div className="job-cards">
            {jobPosts.map((post, index) => (
              <JobCard key={index} {...post} />
            ))}
          </div>
        </div>
      );
    };

export default JobPostsList;
