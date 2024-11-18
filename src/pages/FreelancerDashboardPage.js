import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import CustomNavbar from '../components/navigation/navbar';
import SecondaryNavbar from '../components/navigation/SecondaryNavbar';
import SidebarCard from '../components/Dashboard/SidebarCard/SidebarCard'
import ActiveProjectsCard from '../components/Dashboard/ActiveProjectsCard/ActiveProjectsCard'
import InfoCards from '../components/Dashboard/InfoCards/InfoCards'

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
            {/* <SecondaryNavbar /> */}
            <div>
                <SidebarCard />
                <div>
                    <ActiveProjectsCard />
                    <InfoCards />
                </div>
            </div>
        </Container>
      );
}

export default FreelancerDashboardPage;
