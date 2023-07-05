import { TextField } from "@mui/material";
import { Dispatch } from "react";

interface Props {
  tosInput: string;
  setSelectedLibrary: Dispatch<React.SetStateAction<string>>;
  setTosInput: Dispatch<React.SetStateAction<string>>;
}

export const TOSInput = ({tosInput, setSelectedLibrary, setTosInput}: Props) => {

  const handleTOSChange = (tos: string) => {
    setSelectedLibrary('');
    setTosInput(tos);
  }

  return (
    <TextField
      value={tosInput}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        handleTOSChange(event.target.value);
      }}
      id="tos"
      multiline
      rows={7}
    />
  )
}
