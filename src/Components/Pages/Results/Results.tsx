import { useState } from "react";
import { ConcernShape } from "../../../interfaces";
import ConcernRow from "./ConcernRow/ConcernRow";
import 'react-circular-progressbar/dist/styles.css';
import { ResultsTitleBar } from "./ResultsTitleBar";
import { ResultsCard } from "./ResultsCard";
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
      <div>
        <ResultsTitleBar />
        <div className="results-lower">
          <div className="concern-rows">{concernRows}</div>
          <ResultsCard concerns={concerns} selectedConcern={selectedConcern}/>
        </div>
      </div>
    </main>
  );
};

export default Results;
