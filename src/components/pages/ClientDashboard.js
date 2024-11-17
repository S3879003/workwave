import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CustomNavbar from '../navigation/navbar';
import SecondaryNavbar from '../navigation/SecondaryNavbar';
import SidebarCard from '../DashboardHome/SidebarCard/SidebarCard';
import JobPostsList from '../DashboardHome/JobCardList/JobCardList';
import ActiveProjectsCard from '../DashboardHome/ActiveProjectsCard/ActiveProjectsCard';

const ClientDashboard = () => {
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
      {/* <SecondaryNavbar /> */}
      <SidebarCard />
      <ActiveProjectsCard />
      <JobPostsList />
    </Container>
  );
};

export default ClientDashboard;
