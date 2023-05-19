import { useState } from "react";
import { ConcernShape } from "../../interfaces";
import ConcernRow from "./ConcernRow/ConcernRow";
import "./Results.css";

interface ResultsProps {
  concerns: ConcernShape[];
}

const Results = ({ concerns }: ResultsProps) => {
  const [selectedConcern, setSelectedConcern] = useState(0);
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

  return (
    <main className="results-main">
      <h1 className="results-title">Your Results</h1>
      <div className="results-lower">
        <div className="concern-rows">{concernRows}</div>
        <div className="results-card">
          <div className="results-card-header">
            <h3>{concerns[selectedConcern].title}</h3>
            <h4>Ranking: {concerns[selectedConcern].ranking}</h4>
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
    </main>
  );
};

export default Results;
