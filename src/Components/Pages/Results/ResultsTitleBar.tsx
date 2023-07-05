import { ArrowBack } from "@mui/icons-material"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"

export const ResultsTitleBar = () => {
  return(
    <div className="results-title-bar">
      <h1 className="results-title">Your Results</h1>
      <Link to="/process">
        <Button startIcon={<ArrowBack />}>Process Again</Button>
      </Link>
    </div>
  )
}
