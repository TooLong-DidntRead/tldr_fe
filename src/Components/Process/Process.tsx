import "./Process.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import processTOS, { processTOSPDF } from "../../apicalls";
import { Dispatch, useState } from "react";
import { ConcernShape } from "../../interfaces";
import { useHistory } from "react-router-dom";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { tosLibrary } from "../../tosLibrary";
import Loading from "./Loading/Loading";

interface FormProps {
  tosInput: string;
  setTosInput: Dispatch<React.SetStateAction<string>>;
  setConcerns: Dispatch<React.SetStateAction<ConcernShape[] | null>>;
  setError: Dispatch<React.SetStateAction<string>>;
  user: number | null;
}

const Process = ({tosInput, setTosInput, setConcerns, setError, user}: FormProps) => {
  const [loading, setLoading] = useState(false);
  const [selectedLibrary, setSelectedLibrary] = useState('');
  const [concernAreas, setConcernAreas] = useState<{ [key: string]: boolean }>({
    Privacy: false,
    Security: false,
    Copyright: false,
    Liability: false,
    Cancellation: false,
    Payment: false
  });

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
    <main className="process-main">
      <h1 className="heading">Terms of Service Processor</h1>
      <p className="sub-heading">Understand what's important to you.</p>

      
        {loading ? (
          <>
            <Loading concerns={Object.keys(concernAreas).filter(key => concernAreas[key])}/>
          </>
        ) : (
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
              rows={8}
            />
            <FormGroup row>{getConcernAreaChecks()}</FormGroup>
            <div className="form-footer">
              <FormControl sx={{ m: 0, minWidth: 160 }} size="small">
                <InputLabel id="tos-library-label">TOS LIbrary</InputLabel>
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
        )}
    </main>
  );
};

export default Process;
