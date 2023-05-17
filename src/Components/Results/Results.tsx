import { ConcernsShape } from "../../interfaces";
import ConcernRow from "./Concern/ConcernRow";
import "./Results.css";


interface ResultsProps {
  concerns: ConcernsShape | null;
}

const Results = ({concerns}: ResultsProps) => {

  const keys = concerns && Object.keys(concerns)
  const concernRows = keys && keys.map((concern, i) => <ConcernRow key={i} title={concern} rating={10}/>);

  return (
    <div className="results-page">
      <h1 className="results-title">Your Results</h1>
      <div className="results-lower">
        <div className="concern-rows">
          {concernRows}
        </div>
        <div className="results-card">
          <h3 className="results-heading">{concerns && keys && concerns[keys[0]].summary}</h3>
        </div>
      </div>
    </div>
  );
};

export default Results;
