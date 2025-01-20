import React from "react";
import "./Principles.css";

const PrincipleCard = ({ image, title, description }) => {
  return (
    <div className="principle">
      <img src={image} alt={title} className="principle-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default PrincipleCard;
