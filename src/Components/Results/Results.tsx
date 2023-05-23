import { useState } from "react";
import { ConcernShape } from "../../interfaces";
import ConcernRow from "./ConcernRow/ConcernRow";
import "./Results.css";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Button, Tooltip } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

interface ResultsProps {
  concerns: ConcernShape[];
}

const Results = ({ concerns }: ResultsProps) => {
  const [selectedConcern, setSelectedConcern] = useState(0);
  
  const ratingExplanation :string = "Consumer Friendliness Rating: the progress bar represents a rating from 1 - 10. 1 being the most friendly to the business which created the ToS, 10 being the most consumer-friendly.";
  
  const concernRows =
    concerns.map((concern, i) => {
      return (
        <ConcernRow
          id={i}
          key={i}
          ranking={concern.ranking}
          selectConcern={setSelectedConcern}
          title={concern.title}
        />
      );
    });
  
  const getMeterColor = (value: number) : string => {
    if(value <= 4) {
      return '#D7263D';
    }else if(value <= 7) {
      return '#ffa62b';
    }else {
      return '#358600';
    }
  }

  return (
    <main className="results-main">
      <div>
        <div className="results-title-bar">
          <h1 className="results-title">Your Results</h1>
          <Link to="/process">
            <Button startIcon={<ArrowBack />}>Process Again</Button>
          </Link>
        </div>
        <div className="results-lower">
          <div className="concern-rows">{concernRows}</div>
          <div className="results-card">
            <div className="results-card-header">
              <h3 className="result-concern-title">
                {concerns[selectedConcern].title}
              </h3>
              <div className="meter-parent">
                  <CircularProgressbar
                    value={concerns[selectedConcern].ranking}
                    maxValue={10}
                    text={`${concerns[selectedConcern].ranking}/10`}
                    styles={buildStyles({
                      pathColor: getMeterColor(concerns[selectedConcern].ranking),
                      textColor: "#2E2E2E",
                      textSize: "1.3rem",
                      trailColor: "#d6d6d6",
                      backgroundColor: "#3e98c7",
                    })}
                  />
                  <Tooltip title={ratingExplanation} tabIndex={0}>
                    <HelpOutlineIcon sx={{color: "#0D4C92"}}/>
                  </Tooltip>
              </div>
            </div>
            <div className="results-card-section">
              <h4>How Does This Impact Me?</h4>
              <p>{concerns[selectedConcern].impact}</p>
            </div>
            <div className="results-card-section">
              <h4>Actionable Steps</h4>
              <p>{concerns[selectedConcern].actionable}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Results;
