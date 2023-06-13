import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Dispatch, useState } from "react";
import { useHistory } from "react-router-dom";
import { ConcernShape } from "../../../../interfaces";
import processTOS, { processTOSPDF } from "../../../../apicalls";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { tosLibrary } from "../../../../tosLibrary";

interface Props {
  user: number | null;
  tosInput: string;
  setLoading: Dispatch<React.SetStateAction<boolean>>;
  concernAreas: {[key: string]: boolean};
  setConcernAreas: Dispatch<React.SetStateAction<{[key: string]: boolean}>>;
  setConcerns: Dispatch<React.SetStateAction<ConcernShape[] | null>>;
  setError: Dispatch<React.SetStateAction<string>>;
  setTosInput: Dispatch<React.SetStateAction<string>>;
}

export const Form = ({user, tosInput, setLoading, concernAreas, setConcernAreas, setConcerns, setError, setTosInput}: Props) => {
  const [selectedLibrary, setSelectedLibrary] = useState('');
  const history = useHistory();
  const sendTOS = async () => {
    try {
      setLoading(true);
      const concerns = Object.keys(concernAreas).filter(
        (key) => concernAreas[key]
      );
      const TOSinfo = await processTOS(
        tosInput.replace('"', "'"),
        concerns,
        user
      );
      setConcerns(TOSinfo.data);
      setLoading(false);
      history.push("/results");
    } catch (error: any) {
      const errorMessage: string = error.message;
      errorMessage ? setError(errorMessage) : setError("unexpected error 🙃");
      setError(errorMessage);
    };
  };

  const getConcernCount = () => {
    const keys = Object.keys(concernAreas);
    return keys.reduce((acc, key) => {
      concernAreas[key] && acc++;
      return acc ;
    }, 0);
  };

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

  const handleTOSChange = (tos: string) => {
    setSelectedLibrary('');
    setTosInput(tos);
  }

  const handleLibraryChange = (event: SelectChangeEvent) => {
    setSelectedLibrary(event.target.value);
    setTosInput(event.target.value);
  };

  const processPDF = async (file: File) => {
      try {
        setLoading(true);
        const concerns = Object.keys(concernAreas).filter(
          (key) => concernAreas[key]
        );
        const TOSinfo = await processTOSPDF(file, concerns, user);
        setConcerns(TOSinfo.data);
        setLoading(false);
        history.push("/results");
      } catch (error: any) {
        const errorMessage: string = error.message;
        errorMessage ? setError(errorMessage) : setError("unexpected error 🙃")
      };
  }
  return (
    <form className="form-card">
      <h3 className="form-heading">
        Paste, upload, or select your Terms of Service from a list of
        popular services.
      </h3>
      <TextField
        value={tosInput}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handleTOSChange(event.target.value);
        }}
        id="tos"
        multiline
        rows={7}
      />
      <FormControl sx={{ m: 0 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Select Area(s) of Concern</FormLabel>
        <FormGroup row>{getConcernAreaChecks()}</FormGroup>
      </FormControl>
      <div className="form-footer">
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
        <div className="buttons-parent">
          <Button
            disabled={!(tosInput && getConcernCount())}
            onClick={sendTOS}
            color="primary"
            variant="contained"
            disableElevation
            startIcon={<CheckRoundedIcon />}>Process</Button>
          <input
            disabled={!getConcernCount()}
            accept="application/pdf"
            style={{ display: "none" }}
            id="contained-button-file"
            multiple
            type="file"
            onChange={(e) => {
              if(e.target.files) {
                processPDF(e.target.files[0])
              }
            }}
          />
          <label htmlFor="contained-button-file">
            <Button
              disabled={!getConcernCount()}
              component="span"
              color="primary"
              variant="outlined"
              startIcon={<UploadFileIcon />}>Upload</Button>
          </label>
        </div>
      </div>
    </form>
  )
}
