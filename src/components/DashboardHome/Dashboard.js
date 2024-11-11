import React from 'react';
import SidebarCard from './SidebarCard/SidebarCard';
import ActiveProjectsCard from './ActiveProjectsCard/ActiveProjectsCard';
import InfoCards from './InfoCards/InfoCards';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar-section">
        <SidebarCard />
      </div>
      <div className="main-content">
        <h2>Freelancer Dashboard</h2>
        <ActiveProjectsCard />
        <InfoCards />
      </div>
    </div>
  );
};

export default Dashboard;
