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
        <Principles />
        <div className="about-founder">
          <h2>Here from our Founder</h2>
          <h1>
            <b>Alex Aragon</b>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Home;
