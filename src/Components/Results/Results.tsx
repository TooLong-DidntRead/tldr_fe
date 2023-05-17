import { useState } from "react";
import { ConcernsShape } from "../../interfaces";
import ConcernRow from "./Concern/ConcernRow";
import "./Results.css";

interface ResultsProps {
  concerns: ConcernsShape | null;
}

const concernFriendly: {[key: string] : string} = {
  "privacy": "Privacy",
  "security": "Security",
  "intellectualProperty": "Intellectual Property",
  "liability": "Liability and Indemnification",
  "cancellation": "Termination and Cancellation",
  "payment": "Payment and Fees"
}

const Results = ({ concerns }: ResultsProps) => {
  const [selectedConcern, setSelectedConcern] = useState(0);

  const keys = concerns && Object.keys(concerns);

  const selectConcern = (id: number) => {
    setSelectedConcern(id);
  }

  const concernRows =
    keys &&
    keys.map((concern, i) => (
      <ConcernRow key={i} id={i} title={concernFriendly[concern]} rating={10} selectConcern={selectConcern}/>
    ));

  return (
    <div className="results-page">
      <h1 className="results-title">Your Results</h1>
      <div className="results-lower">
        <div className="concern-rows">{concernRows}</div>
        <div className="results-card">
          <div className="results-card-header">
            <h3>{keys && concernFriendly[keys[selectedConcern]]}</h3>
            <h4>Consumer Friendlyness Ranking: {concerns && keys && concerns[keys[selectedConcern]].ranking}</h4>
          </div>
          <div className="results-card-section">
            <h4>How Does This Impact Me?</h4>
            <p>{concerns && keys && concerns[keys[selectedConcern]].impact}</p>
          </div>
          <div className="results-card-section">
            <h4>Actionable Steps</h4>
            <p>{concerns && keys && concerns[keys[selectedConcern]].actionable}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
