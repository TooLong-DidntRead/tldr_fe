import { useState } from "react";
import { ConcernShape } from "../../interfaces";
import ConcernRow from "./Concern/ConcernRow";
import "./Results.css";

interface ResultsProps {
  concerns: ConcernShape[] | null;
}

// const concernFriendly: {[key: string] : string} = {
//   "privacy": "Privacy",
//   "security": "Security",
//   "intellectualProperty": "Intellectual Property",
//   "liability": "Liability and Indemnification",
//   "cancellation": "Termination and Cancellation",
//   "payment": "Payment and Fees"
// }

const Results = ({ concerns }: ResultsProps) => {
  const [selectedConcern, setSelectedConcern] = useState(0);
  
  const selectedConcernKey:string | null = concerns && Object.keys(concerns[selectedConcern].response)[0];

  const concernRows =
    concerns &&
    concerns.map((concern, i) => {
      const concernKey:string = Object.keys(concern.response)[0]
      return <ConcernRow id={i} key={i} ranking={concern.response[concernKey].ranking} selectConcern={setSelectedConcern} title={concernKey}/>
    });

  return (
    <div className="results-page">
      <h1 className="results-title">Your Results</h1>
      <div className="results-lower">
        <div className="concern-rows">{concernRows}</div>
        <div className="results-card">
          <div className="results-card-header">
            <h3>{concerns && selectedConcernKey}</h3>
            <h4>Consumer Friendlyness Ranking: {concerns && selectedConcernKey && concerns[selectedConcern].response[selectedConcernKey].ranking}</h4>
          </div>
          <div className="results-card-section">
            <h4>How Does This Impact Me?</h4>
            <p>{concerns && selectedConcernKey && concerns[selectedConcern].response[selectedConcernKey].impact}</p>
          </div>
          <div className="results-card-section">
            <h4>Actionable Steps</h4>
            <p>{concerns && selectedConcernKey && concerns[selectedConcern].response[selectedConcernKey].actionable}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
