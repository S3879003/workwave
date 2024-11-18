import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import CustomNavbar from '../components/navigation/navbar';
import SecondaryNavbar from '../components/navigation/SecondaryNavbar';
import JobBoard from '../components/JobSearch/JobBoard'

const JobPage = ({ onSwap }) => {
  return (
    <Container>
        <CustomNavbar />
        <SecondaryNavbar />
        <JobBoard />
    </Container>
  );
}

export default JobPage;

