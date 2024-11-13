import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import CustomNavbar from '../navigation/navbar';
import SecondaryNavbar from '../navigation/SecondaryNavbar';
import SidebarCard from '../DashboardHome/SidebarCard/SidebarCard'
import ActiveProjectsCard from '../DashboardHome/ActiveProjectsCard/ActiveProjectsCard'
import InfoCards from '../DashboardHome/InfoCards/InfoCards'

const FreelancerDashboardPage = ({ onSwap }) => {
    return (
        <Container>
            <CustomNavbar />
            <SecondaryNavbar />
            <SidebarCard />
            <ActiveProjectsCard />
            <InfoCards />
        </Container>
      );
}

export default FreelancerDashboardPage;
