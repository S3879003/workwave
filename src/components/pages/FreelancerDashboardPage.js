import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import CustomNavbar from '../navigation/navbar';
import SecondaryNavbar from '../navigation/SecondaryNavbar';
import SidebarCard from '../DashboardHome/SidebarCard/SidebarCard'
import ActiveProjectsCard from '../DashboardHome/ActiveProjectsCard/ActiveProjectsCard'
import InfoCards from '../DashboardHome/InfoCards/InfoCards'

const FreelancerDashboardPage = ({ onSwap }) => {
    const navigate = useNavigate();

    useEffect(() => {
      const accessLevel = localStorage.getItem('accessLevel');
      if (accessLevel !== '1') {
        navigate('/');
      }
    }, [navigate]);

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
