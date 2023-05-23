import "./Welcome.css";
import logo_sm from "../../images/tldr_sm_dark.svg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const Welcome = () => {

  return (
    <main className="welcome-main">
      <div className="welcome-card">
        <h1 className="welcome-h1">~ Welcome to ~</h1>
        <img className="welcome-logo" src={logo_sm} alt="logo" />
        <h2 className="summary">A ChatGPT-powered app that helps everyday web surfers navigate the intentionally ambiguous world of Terms of Service.</h2>
       <Link to="/login">
          <Button
            disableElevation
            color="primary"
            variant="contained"
          >Begin Demo</Button>
       </Link> 
      </div>
    </main>
  )
};

export default Welcome;
