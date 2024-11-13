import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import your components
import LoginPage from './components/pages/login';
import SignupPage from './components/pages/signup';
import JobPage from './components/pages/JobPage';
import FreelancerDashboard from './components/pages/FreelancerDashboardPage';
import ActiveProjectsPage from './components/pages/ActiveProjectsPage';
import ClientDashboard from './components/pages/ClientDashboard';
import CreateProjectForm from './components/pages/CreateProjectPage';

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
          <Route path="/freelancer-projects" element={<ActiveProjectsPage />} />

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
