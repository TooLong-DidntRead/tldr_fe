import React from "react";
import "./Welcome.css";
import logo_sm from "../../images/tldr_sm_dark.svg";


const Welcome = () => {

  return (
    <main className="welcome-main">
      <div className="welcome-container">
        <h1>Welcome to</h1>
        <img className="logo-img" src={logo_sm} alt="logo" />
        <h2 className="summary">TL:DR is an application made to assist the average web surfer in navigating the intentionally ambigous world of Terms of Service.</h2>
        <h3 className="summary"> Simply copy and paste your user agreement into the TL:DR form and see an easy-to-read summary organized by topic and powered by ChatGPT.</h3>
        <p className="disclaimer">The information provided on this website does not, and is not intended to, constitute legal advice; instead, all information, content, and materials available on this site are for general informational and entertainment purposes only.</p>
      </div>
    </main>
  )
}

export default Welcome;