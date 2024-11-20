import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './InfoCards.scss';

const InfoCards = () => {
  const navigate = useNavigate(); // Initialize navigate

  // Function to handle button click
  const handleButtonClick = (buttonText) => {
    if (buttonText === "Explore Jobs") {
      navigate('/jobs'); // Navigate to the jobs page
    } else {
      console.log(`${buttonText} button clicked`); // Handle other buttons as needed
    }
  };

  const cards = [
    {
      title: "Get noticed",
      text: "Use the power of social media to grow your profile and increase your impact.",
      button: "Share Your Gigs",
    },
    {
      title: "Get more experience",
      text: "Hone your skills and expand your knowledge by completing jobs.",
      button: "Explore Jobs",
    },
    {
      title: "Become a successful seller!",
      text: "Learn how to create an outstanding service experience for your clients.",
      button: "Watch Free Course",
    },
  ];

  return (
    <div className="info-cards-container">
      {cards.map((card, index) => (
        <Card className="info-card shadow-sm" key={index}>
          <Card.Body>
            <h6>{card.title}</h6>
            <p>{card.text}</p>
            <Button
              variant="outline-primary"
              onClick={() => handleButtonClick(card.button)} // Add onClick handler
            >
              {card.button}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default InfoCards;
