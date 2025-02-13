import React from "react";
import "./WudApp.css";
import EventsSection from "./EventSection/EventSection";
import FeatureSection from "./FeatureSection/FeatureSection";
import uniqueExp from "../Assets/uniqueExp.png";
import peopleAround from "../Assets/peopleAround.png";
import socialCalendar from "../Assets/socialCalendar.png";

const WudApp = () => {
  return (
    <div className="wud-app">
      <section className="hero-section2">
        <div className="hero-card2">
          <img src="/iMockup2.png" alt="WUD App" className="hero-image2" />
          <div className="hero-text-content2">
            <h2 className="hero-title2">The Solution:</h2>
            <h1 className="hero-highlight2">Social Media for Events</h1>
            <p className="hero-description2">
              The WUD! app is designed to help people come together with events and
              activities. We want to encourage you to join communities while creating
              communities of your own.
            </p>
            <div className="subscribe-section">
              <h3>Get Notified When We Launch</h3>
              <form className="email-form">
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="email-input"
                  required
                />
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <EventsSection />
      <FeatureSection
        title="EXPLORE UNIQUE EXPERIENCES"
        description="With WUD, we want to encourage people to discover their individuality by exploring and potentially trying different activities and immersing themselves in whatever community they may desire on our platform."
        image={uniqueExp}
      />
      <FeatureSection
        title="MAINTAIN A HEALTHY SOCIAL CALENDAR"
        description="With WUD!, we want to help you better create a network of diverse individuals who are authentic, yet also share some values, who they choose to surround themselves with, and who they invite into their own network/community."
        image={socialCalendar}
      />
      <FeatureSection
        title="MEET AUTHENTIC PEOPLE AROUND YOU"
        description="With WUD!, we want to encourage individuality through retro/introspection, involvement, yet room for personal reflection and growth to then adapt and innovate their own person and character to become better versions of themself over time."
        image={peopleAround}
      />
    </div>
  );
};

export default WudApp;
