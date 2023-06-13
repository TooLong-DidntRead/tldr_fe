import { ConcernShape } from "../../../interfaces";
import { Meter } from "./Meter";
import { MeterTooltip } from "./MeterTooltip";
import { ResultText } from "./ResultText";

interface Props {
  concerns: ConcernShape[];
  selectedConcern: number;
}

export const ResultsCard = ({concerns, selectedConcern}: Props) => {
  return(
    <div className="results-card">
      <div className="results-card-header">
        <h3 className="result-concern-title">{concerns[selectedConcern].title}</h3>
        <div className="meter-parent">
          <Meter concerns={concerns} selectedConcern={selectedConcern}/>
          <MeterTooltip />
        </div>
      </div>
      <ResultText title="How Does This Impact Me?" content={concerns[selectedConcern].impact}/>
      <ResultText title="Actionable Steps" content={concerns[selectedConcern].actionable}/>
    </div>
  )
}
