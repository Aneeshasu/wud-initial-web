import "./Home.css";
import Principles from "../Components/Principles/Principles";

function Home() {
  return (
    <>
      <div className="home-content">
        <section className="hero">
          <div className="hero-card">
            <img src="/iMockup.png" alt="WUDI App" className="hero-image" />
            <div className="hero-content">
              <h1 className="hero-title">
                <span className="highlight1">INNOVATE</span>
                <br />
                <span className="highlight2">YOUR</span>
                <br />
                <span className="highlight2">OWN</span>
                <br />
                <span className="highlight1">SELF</span>
              </h1>
              <p>Keep your Social Life alive with WUDI!</p>
              <button className="cta-button">Join the team</button>
            </div>
          </div>
        </section>
        <section className="solution">
          <div className="solution-content">
            <p>
              Loneliness and Social Isolation have become increasingly prevalent,
              <br />
              with many <b>struggling to find meaningful and authentic connections</b>.
              <br />
              <br />
              There is a need for a <b>solution that brings people together through</b>
              <br />
              <b>shared exploration, co-collaboration, and adventure</b>, helping users
              <br /> discover new friendships, connect with their surroundings, and deepen
              <br />
              their sense of belonging.
            </p>
            <button className="cta-button">The Solution</button>
          </div>
        </section>
        <Principles />
        <div className="about-founder">
          <h2>Hear from our Founder</h2>
          <h1>
            <b>Alex Aragon</b>
          </h1>
        </div>
      </div>
      <div>
        <section className="about">
          <div className="about-content">
            <p>
              At WUD!, we strive to create a social platform that encourages people to
              further
              <br />
              develop their community by sharing their presence and by experiencing
              wonderful
              <br />
              moments together through activities and events.
              <br />
              <br />
              The WUD! team is committed to help people plant a seed of their own to make
              real
              <br />
              positive change happen for all others, similar or distinct to their own
              individual.
              <br />
              We hope to help you find and build a place where you thrive with WUD!
            </p>
            <br />
            <button className="cta-button">Read our story</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
