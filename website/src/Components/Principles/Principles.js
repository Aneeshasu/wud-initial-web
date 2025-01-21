import React from "react";
import PrincipleCard from "./PrincipleCard";
import "./Principles.css";

// Import images correctly
import connectionImg from "../../Assets/connection.jpeg";
import communityImg from "../../Assets/community.jpeg";
import simplicityImg from "../../Assets/simplicity.jpeg";
import joyfulImg from "../../Assets/joyful.jpeg";
import trustImg from "../../Assets/trust.jpeg";

const principlesData = [
  {
    title: "CONNECTION",
    description:
      "Fostering connections to inspire and enrich lives through shared experiences.",
    image: connectionImg,
  },
  {
    title: "COMMUNITY FIRST",
    description: "Empowering communities through meaningful engagement.",
    image: communityImg,
  },
  {
    title: "SIMPLICITY",
    description: "Simplifying event discovery, hosting, and enjoyment for all users.",
    image: simplicityImg,
  },
  {
    title: "JOYFUL EXPERIENCES",
    description: "Creating joyful moments that leave lasting memories for users.",
    image: joyfulImg,
  },
  {
    title: "TRUST & TRANSPARENCY",
    description:
      "Building trust through transparency, privacy, security, and satisfaction.",
    image: trustImg,
  },
];

const Principles = () => {
  return (
    <div className="principles-container">
      <section className="principles">
        <h2>
          Our Guiding Principles for <strong>Connection, Trust, & Growth</strong>
        </h2>
        <p className="principles-description">
          At WUD!, our mission is to bring people together by making it effortless to
          connect, engage, and build meaningful relationships through events and
          community-driven activities.
        </p>
        <div className="principles-grid">
          {principlesData.map((principle, index) => (
            <PrincipleCard
              key={index}
              image={principle.image}
              title={principle.title}
              description={principle.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Principles;
