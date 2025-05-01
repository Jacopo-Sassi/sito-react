function Hero() {
  return (
    <div className="hero">
      <div className="hero-text"> 
        <div className="hero-info">
          <img src="trend.svg" alt="Trend" className="trend"/>
          <p className="hero-info-text">120% average increase in scholarships with FSA</p>
        </div>
        <h1 className="hero-title">Is searching for a college soccer program wearing you down?</h1>
        <p>We know there’s a fit for you out there. FSA promotes your profile to the entire US college market — matching you with the right programs for your skills.</p>
        <div className="hero-img">
          <img src="playstorer.png" alt="Play Store" className="store"/>
          <img src="appstorer.png" alt="App Store" className="store"/>
        </div>
      </div>
    </div>
  );
}

export default Hero;