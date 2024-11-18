import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

// Import your components
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import JobPage from './pages/JobPage';
import FreelancerDashboard from './pages/FreelancerDashboardPage';
import ActiveProjectsPage from './pages/ActiveProjectsPage';
import ClientDashboard from './pages/ClientDashboard';
import CreateProjectForm from './pages/CreateProjectPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for Login Page */}
          <Route path="/" element={<LoginPage />} />
          
          {/* Route for Signup Page */}
          <Route path="/signup" element={<SignupPage />} />

          {/* Route for Job Search Page */}
          <Route path="/jobs" element={<JobPage />} />

          {/* Route for Freelancer Dashboard */}
          <Route path="/freelancer-dashboard" element={<FreelancerDashboard />} />

          {/* Route for Active Projects Page */}
          <Route path="/active-projects" element={<ActiveProjectsPage />} />

          {/* Route for Client Dashboard */}
          <Route path="/client-dashboard" element={<ClientDashboard />} />

          {/* Route for Create Project Page */}
          <Route path="/create-project" element={<CreateProjectForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
