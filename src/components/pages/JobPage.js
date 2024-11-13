import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import CustomNavbar from '../navigation/navbar';
import SecondaryNavbar from '../navigation/SecondaryNavbar';
import JobBoard from '../JobSearch/JobBoard'

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

