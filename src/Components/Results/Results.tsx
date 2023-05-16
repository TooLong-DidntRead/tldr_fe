import { ConcernsShape } from "../../interfaces";
import "./Results.css";


interface ResultsProps {
  concerns: ConcernsShape | null;
}

const Results = ({concerns}: ResultsProps) => {

  const keys = concerns && Object.keys(concerns)
  const lis = keys && keys.map((concern, i) => <li key={i}>{concern}</li>);

  return (
    <div className="results-container">
      <div className="list-content">
        <ul className="list">
          {lis}
        </ul>
      </div>
      <div className="results-card">
        <h3 className="results-heading">{concerns && keys && concerns[keys[0]].summary}</h3>
      </div>
    </div>
  );
};

export default Results;
