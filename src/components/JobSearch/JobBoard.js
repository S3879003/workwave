import React, { useState } from 'react';
import JobCard from './JobCard';
import JobDetailsModal from './JobDetailsModal/JobDetailsModal';
import './JobBoard.css';

const JobBoard = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Sample data for job postings
  const jobs = [
    {
      id: 1,
      company: 'Business Incorporated Pty Ltd',
      title: 'Looking to hire a video editor for a healthcare product advertisement',
      description: 'We are seeking a skilled video editor...',
      image: 'https://via.placeholder.com/600x300',
      skills: ['Video Editing', 'Motion Graphics', 'Storytelling'],
      budget: 3000,
      rating: 'Top Rated'
    },
    {
      id: 2,
      company: 'Corporate Incorporated Pty Ltd',
      title: 'Looking to hire a graphic designer for a new brand logo',
      description: 'We need a creative graphic designer...',
      image: 'https://via.placeholder.com/600x300',
      skills: ['Graphic Design', 'Branding', 'Adobe Illustrator'],
      budget: 2000,
      rating: 'Top Rated'
    },
    {
      id: 3,
      company: 'HealthyBusiness Co',
      title: 'Looking to hire a web developer for a healthcare product company',
      description: 'We are looking for a talented web developer...',
      image: 'https://via.placeholder.com/600x300',
      skills: ['Web Development', 'React.js', 'Node.js'],
      budget: 4500,
      rating: 'New User'
    }
  ];

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
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} handleShowModal={handleShowModal} />
      ))}

      {/* Job Details Modal */}
      {selectedJob && (
        <JobDetailsModal show={showModal} handleClose={handleCloseModal} job={selectedJob} />
      )}
    </div>
  );
};

export default JobBoard;
