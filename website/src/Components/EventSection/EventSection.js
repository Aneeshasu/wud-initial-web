import React from "react";

import "./EventSection.css";
import PrincipleCard from "../Principles/PrincipleCard";
import discoverEvents from "../../Assets/discoverEvents.png";
import hostEvents from "../../Assets/hostEvents.png";
import authenticPeople from "../../Assets/authenticPeople.png";

const cardData = [
  {
    title: "DISCOVER EVENTS",
    description:
      "We want to encourage people to discover their individuality by exploring.",
    image: discoverEvents,
  },
  {
    title: "HOST EVENTS",
    description: "We want to help you create a network of diverse authentic individuals.",
    image: hostEvents,
  },
  {
    title: "MEET AUTHENTIC PEOPLE",
    description: "We want to help you innovate your own self and your community.",
    image: authenticPeople,
  },
];

const EventsSection = () => {
  return (
    <div className="events-section">
      <h2 className="events-title">With our App, we encourage you to</h2>
      <div className="cards-container">
        {cardData.map((card, index) => (
          <PrincipleCard
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default EventsSection;
