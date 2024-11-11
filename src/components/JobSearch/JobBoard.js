import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import JobCard from './JobCard'
import './JobBoard.css';


const JobBoard = () => {
  return (
    <div className='JobBoard'>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
    </div>
  );
};

export default JobBoard;
