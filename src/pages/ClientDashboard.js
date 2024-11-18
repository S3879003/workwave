import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CustomNavbar from '../components/navigation/navbar';
import SecondaryNavbar from '../components/navigation/SecondaryNavbar';
import SidebarCard from '../components/Dashboard/SidebarCard/SidebarCard';
import JobPostsList from '../components/Dashboard/JobCardList/JobCardList';
import ActiveProjectsCard from '../components/Dashboard/InProgressProjectsCard/ActiveProjectsCard';

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
            <div className='dashboard-container'>
              <SidebarCard />
              <ActiveProjectsCard />
              <div>
                <JobPostsList />
              </div> 
            </div>
    </Container>
  );
};

export default ClientDashboard;
