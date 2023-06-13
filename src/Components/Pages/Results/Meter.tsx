import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import { ConcernShape } from "../../../interfaces";

interface Props {
  concerns: ConcernShape[];
  selectedConcern: number;
}

export const Meter = ({concerns, selectedConcern}: Props) => {

  const getMeterColor = (value: number) : string => {
    if(value <= 4) {
      return '#D7263D';
    }else if(value <= 7) {
      return '#ffa62b';
    }else {
      return '#358600';
    }
  }
  
  return(
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
  )
}
