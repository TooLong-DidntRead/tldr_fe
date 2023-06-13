import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { tosLibrary } from "../../../../tosLibrary"
import { Dispatch } from "react";

interface Props {
  selectedLibrary: string;
  setSelectedLibrary:Dispatch<React.SetStateAction<string>>;
  setTosInput: Dispatch<React.SetStateAction<string>>;
}

export const TOSLibrary = ({selectedLibrary, setSelectedLibrary, setTosInput}: Props) => {

  const handleLibraryChange = (event: SelectChangeEvent) => {
    setSelectedLibrary(event.target.value);
    setTosInput(event.target.value);
  };

  return(
    <FormControl sx={{ m: 0, minWidth: 160 }} size="small">
      <InputLabel id="tos-library-label">TOS Library</InputLabel>
      <Select
        labelId="tos-library-label"
        id="tos-library-select"
        value={selectedLibrary}
        label="Select TOS"
        onChange={handleLibraryChange}
      >
        {tosLibrary.map((tos) => (
          <MenuItem key={tos.service} value={tos.tos}>
            {tos.service}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
