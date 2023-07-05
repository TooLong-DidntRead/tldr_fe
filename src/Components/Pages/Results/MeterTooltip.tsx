import { HelpOutline } from "@mui/icons-material"
import { Tooltip } from "@mui/material"

export const MeterTooltip = () => {
  const ratingExplanation: string = "Consumer Friendliness Rating: the progress bar represents a rating from 1 - 10. 1 being the most friendly to the business which created the ToS, 10 being the most consumer-friendly.";
  return(
    <Tooltip title={ratingExplanation} tabIndex={0}>
      <HelpOutline sx={{color: "#0D4C92", fontSize: 16}} />
    </Tooltip>
  )
}
