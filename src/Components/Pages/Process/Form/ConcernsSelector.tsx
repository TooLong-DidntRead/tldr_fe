import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from "@mui/material"
import { Dispatch } from "react";

interface Props {
  concernAreas: {[key: string]: boolean};
  setConcernAreas: Dispatch<React.SetStateAction<{[key: string]: boolean}>>;
}

export const ConcersSelector = ({concernAreas, setConcernAreas}: Props) => {

  const getConcernAreaChecks = () => {
    const keys = Object.keys(concernAreas);
    return keys.map((key) => (
      <FormControlLabel
        key={key}
        control={<Checkbox size="small" />}
        label={key}
        checked={concernAreas[key]}
        onChange={(e) =>
          setConcernAreas({ ...concernAreas, [key]: !concernAreas[key] })
        }
      />
    ));
  };

  return(
    <FormControl sx={{ m: 0 }} component="fieldset" variant="standard">
      <FormLabel component="legend">Select Area(s) of Concern</FormLabel>
      <FormGroup row>{getConcernAreaChecks()}</FormGroup>
    </FormControl>
  )
}
