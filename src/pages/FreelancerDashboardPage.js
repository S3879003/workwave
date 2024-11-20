import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import CustomNavbar from '../components/navigation/navbar';
import SidebarCard from '../components/Dashboard/SidebarCard/SidebarCard'
import InProgressProjectsCard from '../components/Dashboard/InProgressProjectsCard/InProgressProjectsCard'
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
            <div className='dashboard-container'>
                <SidebarCard />
                <div>
                  <InProgressProjectsCard />
                  <InfoCards />
                </div>
            </div>
        </Container>
      );
}

export default FreelancerDashboardPage;
