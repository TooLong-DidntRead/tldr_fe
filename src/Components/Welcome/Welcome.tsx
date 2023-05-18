import "./Welcome.css";
import logo_sm from "../../images/tldr_sm_dark.svg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const Welcome = () => {

  return (
    <main className="welcome-main">
      <div className="welcome-card">
        <h1 className="welcome-h1">Welcome to</h1>
        <img className="welcome-logo" src={logo_sm} alt="logo" />
        <h2 className="summary">TL:DR is an application made to assist the average web surfer in navigating the intentionally ambigous world of Terms of Service.</h2>
        <h3 className="summary instructions"> Simply copy and paste your user agreement into the TL:DR form and see an easy-to-read summary organized by topic and powered by ChatGPT.</h3>
       <Link to="/login">
          <Button
            disableElevation
            color="primary"
            variant="contained"
          >Begin Demo</Button>
       </Link> 
        {/* <p className="disclaimer">The information provided on this website is collected and analyzed by AI technology to help you understand how certain terms and conditions affect specific areas of concern, such as privacy or recurring payments. However, please be aware that the information is for general informational purposes only and is not intended to provide legal advice or create a lawyer-client relationship. The accuracy, completeness, and adequacy of the information is not guaranteed and you should consult with a licensed attorney in your jurisdiction for advice on specific legal issues or questions.</p> */}
      </div>
    </main>
  )
};

export default Welcome;
