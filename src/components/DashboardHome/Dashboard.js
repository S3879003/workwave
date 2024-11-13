import React from 'react';
import SidebarCard from './SidebarCard/SidebarCard';
import ActiveProjectsCard from './ActiveProjectsCard/ActiveProjectsCard';
import InfoCards from './InfoCards/InfoCards';
import './Dashboard.css';
import JobPostsList from '../DashboardHome/JobCardList/JobCardList';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar-section">
        <SidebarCard />
      </div>
      <div className="main-content">
        <h2>Freelancer Dashboard</h2>
        {/* <ActiveProjectsCard /> */}
        {/* <InfoCards /> */}
        <JobPostsList />
      </div>
    </div>
  );
};

export default Dashboard;
