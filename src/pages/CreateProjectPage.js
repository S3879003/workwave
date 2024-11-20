import React from 'react';
import { Container } from 'react-bootstrap';
import CustomNavbar from '../components/navigation/navbar';
import CreateProjectForm from '../components/Dashboard/CreateProjectForm/CreateProjectForm'

const CreateProjectPage = ({ onSwap }) => {
    return (
        <Container>
            <CustomNavbar />
            <CreateProjectForm />
        </Container>
      );
}

export default CreateProjectPage;
