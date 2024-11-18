import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './InfoCards.scss';

const InfoCards = () => {
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
            <Button variant="outline-primary">{card.button}</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default InfoCards;
