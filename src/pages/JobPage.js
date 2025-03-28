import React from 'react';
import { Container } from 'react-bootstrap';
import CustomNavbar from '../components/navigation/navbar';
import JobBoard from '../components/JobSearch/JobBoard'

const JobPage = ({ onSwap }) => {
  return (
    <Container>
        <CustomNavbar />
        <JobBoard />
    </Container>
  );
}

export default JobPage;

