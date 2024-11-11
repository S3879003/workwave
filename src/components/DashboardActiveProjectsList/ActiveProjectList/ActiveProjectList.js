import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './ActiveProjectList.css'

const ActiveProjectList = () => {
  const projects = [
    {
      id: 1,
      title: 'Looking to hire a UX designer for an iOS and Android app',
      description:
        'Lorem Ipsum Dolor Sit Amet, Interdum A Suscipit Et, Consequat Nec Nibh...',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      id: 2,
      title: 'Looking to hire a UX designer for an iOS and Android app',
      description:
        'Lorem Ipsum Dolor Sit Amet, Interdum A Suscipit Et, Consequat Nec Nibh...',
      image: 'https://via.placeholder.com/400x200',
    },
    {
      id: 3,
      title: 'Looking to hire a UX designer for an iOS and Android app',
      description:
        'Lorem Ipsum Dolor Sit Amet, Interdum A Suscipit Et, Consequat Nec Nibh...',
      image: 'https://via.placeholder.com/400x200',
    },
  ];

  return (
    <div className="active-project-list">
      <h2>Active Projects</h2>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
        />
      ))}
    </div>
  );
};

export default ActiveProjectList;
