import React, { useCallback, useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import './ProjectList.scss';

const ActiveProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState('');

  const userId = localStorage.getItem('userId');

  console.log(userId)

  // Fetch ongoing projects for the current user
  const fetchOngoingProjects = useCallback(async () => {
    try {
      const response = await fetch(`https://workwave-bcdf01747233.herokuapp.com/job/${userId}/ongoing`, {
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
  }, [userId]);

  useEffect(() => {
    if (userId) {
      fetchOngoingProjects();
    }
  }, [fetchOngoingProjects, userId]);

  return (
    <div className="active-project-list">
      <h2>Jobs in Progress</h2>
      {error && <p className="error-message">{error}</p>}
      {projects.length > 0 ? (
        projects.map((project) => (
          <ProjectCard
            key={project._id}
            jobid={project._id}
            userId={userId}
            title={project.title}
            description={project.description}
            image={project.img}
            clientName={`${project.userId.firstName} ${project.userId.lastName}`}
            freelancerName={`${project.freelancerId.firstName} ${project.freelancerId.lastName}`}
          />
        ))
      ) : (
        <p>No jobs currently underway.</p>
      )}
    </div>
  );
};

export default ActiveProjectList;
