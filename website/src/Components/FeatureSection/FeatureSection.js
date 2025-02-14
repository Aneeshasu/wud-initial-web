import React from "react";
import "./FeatureSection.css";

const FeatureSection = ({ title, description, image, reverse }) => {
  return (
    <div className={`feature-section ${reverse ? "reverse" : ""}`}>
      <div className="feature-section-inner">
        <div className="feature-image">
          <img src={image} alt={title} />
        </div>
        <div className="feature-text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
