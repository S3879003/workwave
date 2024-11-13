import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import CustomNavbar from '../navigation/navbar';
import SecondaryNavbar from '../navigation/SecondaryNavbar';
import SidebarCard from '../DashboardHome/SidebarCard/SidebarCard'
import ActiveProjectsCard from '../DashboardHome/ActiveProjectsCard/ActiveProjectsCard'
import CardJobList from '../DashboardHome/JobCardList/JobCardList'

const ClientDashboard = ({ onSwap }) => {
    return (
        <Container>
            <CustomNavbar />
            <SecondaryNavbar />
            <SidebarCard />
            <ActiveProjectsCard />
            <CardJobList />
        </Container>
      );
}

export default ClientDashboard;
