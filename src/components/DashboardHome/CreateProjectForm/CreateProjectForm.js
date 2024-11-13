import React, { useState } from 'react';
import { Form, Button, InputGroup, Badge } from 'react-bootstrap';
import './CreateProjectForm.css';

const CreateProjectForm = () => {
  const [skills, setSkills] = useState(['Proficient In Video Editing Software', 'Colour Grading And Sound Editing', 'Experience In Creating Product Advertisements']);
  const [newSkill, setNewSkill] = useState('');
  const [budget, setBudget] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  const handleCreateProject = () => {
    // Handle project creation logic here
    alert(`Project Created: ${title}`);
  };

  return (
    <div className="create-project-form shadow-sm">
      <h2>Create a Project</h2>
      
      {/* Image Upload Section */}
      <div className="image-upload-section">
        <img src="https://via.placeholder.com/600x300" alt="Project" className="project-image" />
        <Button variant="light" className="upload-button">
          <i className="bi bi-upload"></i>
        </Button>
      </div>

      {/* Form Fields */}
      <Form>
        {/* Title */}
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the project title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        {/* Project Description */}
        <Form.Group className="mb-3">
          <Form.Label>Project Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Describe the project"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        {/* Skills Required */}
        <Form.Group className="mb-3">
          <Form.Label>Skills Required</Form.Label>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <Badge bg="primary" key={index} className="skill-badge">
                {skill}
                <span className="remove-skill" onClick={() => handleRemoveSkill(index)}>×</span>
              </Badge>
            ))}
          </div>
          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              placeholder="Add a new skill"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
            />
            <Button onClick={handleAddSkill} variant="outline-secondary">Add More +</Button>
          </InputGroup>
        </Form.Group>

        {/* Budget Amount */}
        <Form.Group className="mb-4">
          <Form.Label>Budget Amount</Form.Label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control
              type="number"
              placeholder="0.00"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </InputGroup>
          <Form.Text className="text-muted">
            How much you're willing to pay for the job
          </Form.Text>
        </Form.Group>

        {/* Create Project Button */}
        <Button variant="primary" className="create-project-button" onClick={handleCreateProject}>
          Create Project
        </Button>
      </Form>
    </div>
  );
};

export default CreateProjectForm;
