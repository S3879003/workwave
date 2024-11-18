import React, { useState } from 'react';
import { Form, Button, InputGroup, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './CreateProjectForm.scss';

const CreateProjectForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [jobType, setJobType] = useState('');
  const [budget, setBudget] = useState('');
  const [imgBase64, setImgBase64] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  // Job types based on your secondary navigation bar
  const jobTypes = [
    'Graphics & Design',
    'Digital Marketing',
    'Writing & Translation',
    'Video & Animation',
    'Music & Audio',
    'Programming & Tech',
    'Photography',
    'Business',
  ];

  // Function to handle project creation
  const handleCreateProject = async (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');

    // Get the user ID from localStorage
    const userId = localStorage.getItem('userId');
    if (!userId) {
      setError('User not authenticated');
      return;
    }

    // Validate fields
    if (!title || !description || !jobType || !budget || !imgBase64) {
      setError('Please fill in all fields');
      return;
    }

    // Prepare the data to send to the backend
    const jobData = {
      title,
      description,
      jobType,
      budget: parseFloat(budget),
      img: imgBase64,
    };

    try {
      const response = await fetch(`http://localhost:8888/job/${userId}/listings/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Project created successfully!');
        setTitle('');
        setDescription('');
        setJobType('');
        setBudget('');
        setImgBase64('');

        // Redirect to client dashboard after successful creation
        setTimeout(() => {
          navigate('/client-dashboard');
        }, 1000); // Optional delay for user feedback
      } else {
        setError(data.message || 'Failed to create project');
      }
    } catch (err) {
      console.error('Error creating project:', err);
      setError('An error occurred while creating the project');
    }
  };

  // Function to convert the uploaded image to base64
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgBase64(reader.result);
      };
    }
  };

  return (
    <div className="create-project-form shadow-sm">
      <h2>Create a Project</h2>

      {/* Success or Error Message */}
      {success && <Alert variant="success">{success}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      
      {/* Image Upload Section */}
      <Form.Group className="mb-3">
        <Form.Label>Upload Project Image</Form.Label>
        <Form.Control type="file" onChange={handleImageUpload} accept="image/*" />
        {imgBase64 && (
          <img
            src={imgBase64}
            alt="Uploaded"
            className="project-image mt-3"
            style={{ maxHeight: '300px', objectFit: 'cover' }}
          />
        )}
      </Form.Group>

      {/* Form Fields */}
      <Form onSubmit={handleCreateProject}>
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

        {/* Job Type Dropdown */}
        <Form.Group className="mb-3">
          <Form.Label>Job Type</Form.Label>
          <Form.Select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option value="">Select a job type</option>
            {jobTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </Form.Select>
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
        </Form.Group>

        {/* Create Project Button */}
        <Button variant="primary" type="submit" className="create-project-button">
          Create Project
        </Button>
      </Form>
    </div>
  );
};

export default CreateProjectForm;
