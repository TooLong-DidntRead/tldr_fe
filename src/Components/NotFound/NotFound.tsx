import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import CottageIcon from '@mui/icons-material/Cottage';


interface NotFoundProps {
  error?: string;
  setError: Function;
}

const NotFound = ({error, setError}: NotFoundProps) => {
  const resetError = () => {
    setError(false);
  }

  return (
    <main className="error-main">
      <div className="error-card">
        <h1>Uh-Oh, there's been an error</h1>
        <h2>Message:</h2>
        {error ? <h3>{error}</h3> : <h3>The page you're looking for doesn't exist</h3>}
        <Link to="/"><Button
                onClick={resetError}
                color="primary"
                variant="contained"
                disableElevation
                startIcon={<CottageIcon/>}> Return Home </Button></Link>
      </div>
    </main>
  )
}

export default NotFound;