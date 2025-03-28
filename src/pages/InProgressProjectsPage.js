import React from 'react';
import { Container } from 'react-bootstrap';
import CustomNavbar from '../components/navigation/navbar';
import ActiveProjectList from '../components/InprogressProjects/ProjectList'

const InprogressProjects = ({ onSwap }) => {
    return (
        <Container>
            <CustomNavbar />
            <ActiveProjectList />
        </Container>
      );
}

export default InprogressProjects;
