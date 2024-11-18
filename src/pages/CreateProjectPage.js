import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import CustomNavbar from '../components/navigation/navbar';
import SecondaryNavbar from '../components/navigation/SecondaryNavbar';
import CreateProjectForm from '../components/Dashboard/CreateProjectForm/CreateProjectForm'

const CreateProjectPage = ({ onSwap }) => {
    return (
        <Container>
            <CustomNavbar />
            {/* <SecondaryNavbar /> */}
            <CreateProjectForm />
        </Container>
      );
}

export default CreateProjectPage;
