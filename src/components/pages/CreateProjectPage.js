import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import CustomNavbar from '../navigation/navbar';
import SecondaryNavbar from '../navigation/SecondaryNavbar';
import CreateProjectForm from '../DashboardHome/CreateProjectForm/CreateProjectForm'

const CreateProjectPage = ({ onSwap }) => {
    return (
        <Container>
            <CustomNavbar />
            <SecondaryNavbar />
            <CreateProjectForm />
        </Container>
      );
}

export default CreateProjectPage;
