import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import CustomNavbar from '../components/navigation/navbar';
import SecondaryNavbar from '../components/navigation/SecondaryNavbar';
import ActiveProjectList from '../components/ActiveProjects/ActiveProjectList'

const ActiveProjectsPage = ({ onSwap }) => {
    return (
        <Container>
            <CustomNavbar />
            {/* <SecondaryNavbar /> */}
            <ActiveProjectList />
        </Container>
      );
}

export default ActiveProjectsPage;
