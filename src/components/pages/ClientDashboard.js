import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import CustomNavbar from '../navigation/navbar';
import SecondaryNavbar from '../navigation/SecondaryNavbar';
import SidebarCard from '../DashboardHome/SidebarCard/SidebarCard'
import ActiveProjectsCard from '../DashboardHome/ActiveProjectsCard/ActiveProjectsCard'
import CardJobList from '../DashboardHome/JobCardList/JobCardList'

const ClientDashboard = ({ onSwap }) => {
    const navigate = useNavigate();

    useEffect(() => {
      const accessLevel = localStorage.getItem('accessLevel');
      if (accessLevel !== '2') {
        navigate('/');
      }
    }, [navigate]);
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
