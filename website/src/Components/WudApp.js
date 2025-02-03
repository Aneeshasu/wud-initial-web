import React from "react";
import "./WudApp.css";

const WudApp = () => {
  return (
    <div>
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
    </div>
  );
};

export default WudApp;
