function Main() {
  return (
    <div className="main">
      <div className="main-card">
      <img src="mail.svg" alt="Mail" className="mail-icon"/>
      <p className="main-card-text">No more emails, calls or waiting around</p>
      </div>
      <h1 className="main-title">Take control of the process with FSA</h1>
      <div className="main-description">
        <div className="main-description-text">
          <p className="subtitle-main-description">1. Step-by-step-guidance</p>
          <h1 className="main-description-title">Insider experience</h1>
          <p className="main-description-inner-text">FSA is built by experts in college recruitment. We’ve been in the game for years, and we’ve distilled our deep experience to craft a process that works for athletes and coaches alike.</p>
          <div className="main-card-container">
            <div className="main-card-list">
              <img src="glasses.svg" alt="Glasses" className="mainCard-icon"/>
              <p className="main-card-text">Advanced Scouting Tools</p>
            </div>
            <div className="main-card-list">
              <img src="stats.svg" alt="Stats" className="mainCard-icon"/>
              <p className="main-card-text">Data-Driven Recruiting</p>
            </div>
            <div className="main-card-list">
              <img src="calendar.svg" alt="Calendar" className="mainCard-icon"/>
              <p className="main-card-text">Performance Metrics</p>
            </div>
          </div>
        </div>
        <div className="main-description-img">
          <img src="example.jpg" alt="example" className="main-description-image"/>
        </div>
      </div>
    </div>
  );
}

export default Main;