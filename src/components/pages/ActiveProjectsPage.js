import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import CustomNavbar from '../navigation/navbar';
import SecondaryNavbar from '../navigation/SecondaryNavbar';
import ActiveProjectList from '../DashboardActiveProjectsList/ActiveProjectList/ActiveProjectList'

const ActiveProjectsPage = ({ onSwap }) => {
    return (
        <Container>
            <CustomNavbar />
            <SecondaryNavbar />
            <ActiveProjectList />
        </Container>
      );
}

export default ActiveProjectsPage;
