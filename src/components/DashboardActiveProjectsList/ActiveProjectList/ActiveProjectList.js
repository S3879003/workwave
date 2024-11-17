import React, { useEffect, useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './ActiveProjectList.css';

const ActiveProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState('');

  const userId = localStorage.getItem('userId');

  // Fetch ongoing projects for the current user
  const fetchOngoingProjects = async () => {
    try {
      const response = await fetch(`http://localhost:8888/job/${userId}/ongoing`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();

      if (response.ok) {
        setProjects(data.projects);
      } else {
        setError(data.message || 'Failed to fetch ongoing projects');
      }
    } catch (err) {
      console.error('Error fetching ongoing projects:', err);
      setError('An error occurred while fetching ongoing projects');
    }
  };

  useEffect(() => {
    if (userId) {
      fetchOngoingProjects();
    }
  }, [userId]);

  return (
    <div className="active-project-list">
      <h2>Active Projects</h2>
      {error && <p className="error-message">{error}</p>}
      {projects.length > 0 ? (
        projects.map((project) => (
          <ProjectCard
            key={project._id}
            title={project.title}
            description={project.description}
            image={project.img}
            clientName={`${project.userId.firstName} ${project.userId.lastName}`}
            freelancerName={`${project.freelancerId.firstName} ${project.freelancerId.lastName}`}
          />
        ))
      ) : (
        <p>No active projects found.</p>
      )}
    </div>
  );
};

export default ActiveProjectList;
