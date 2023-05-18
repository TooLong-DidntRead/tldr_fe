import "./Process.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import processTOS from "../../apicalls";
import { Dispatch, useState } from "react";
import { ConcernShape } from "../../interfaces";
import { useHistory } from "react-router-dom";
import { tosLibrary } from "../../tosLibrary";
import { Checkbox, CircularProgress, FormControlLabel, FormGroup } from "@mui/material";

interface FormProps {
  setConcerns: Dispatch<React.SetStateAction<ConcernShape[] | null>>;
  setError: Dispatch<React.SetStateAction<string>>;
  user: number | null;
}

interface ConcernArea {
  [key:string]: boolean
}

const Form = ({ setConcerns, setError, user }: FormProps) => {
  const [tosInput, setTosInput] = useState(tosLibrary[0].tos);
  const [loading, setLoading] = useState(false);
  const [concernAreas, setConcernAreas] = useState<ConcernArea>({
    'Privacy': false,
    'Security': false,
    'Copyright': false,
    'Liability': false,
    'Cancellation': false,
    'Payment': false
  });

  const history = useHistory();

  const sendTOS = async () => {
    setLoading(true);
    const concerns = Object.keys(concernAreas).filter(key => concernAreas[key]);
    const TOSinfo = await processTOS(tosInput, concerns, setError, user);
    setConcerns(TOSinfo.data);
    setLoading(false);
    history.push("/results");
  };

  const getConcernAreaChecks = () => {
    const keys = Object.keys(concernAreas);
    return keys.map((key) => (
      <FormControlLabel
        key={key}
        control={<Checkbox size="small" />}
        label={key}
        checked={concernAreas[key]}
        onChange={e => setConcernAreas({...concernAreas, [key]: !concernAreas[key]})}
      />
    ));
  };

  return (
    <main className="process-main">
      <h1 className="heading">Terms of Service Processor</h1>
      <p className="sub-heading">Understand what's important to you.</p>

      <form className="form-card">
        {loading ? (
          <>
            <h3 className="form-heading">
              Processing Terms of Service, Please Wait
            </h3>
            <div className="loading-parent">
              <CircularProgress id="loading-icon"/>
            </div>
          </>
        ) : (
          <>
            <h3 className="form-heading">
              Paste, upload, or select your Terms of Service from a list of
              popular services.
            </h3>
            <TextField
              value={tosInput}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setTosInput(event.target.value) }}
              id="tos"
              multiline
              rows={8}/>
            <FormGroup row>
              {getConcernAreaChecks()}
            </FormGroup>
            <div className="form-footer">
              <Button
                onClick={sendTOS}
                color="primary"
                variant="contained"
                disableElevation
                startIcon={<CheckRoundedIcon />}> Process </Button>
              <Button
                color="primary"
                variant="outlined"
                startIcon={<UploadFileIcon />}> Upload
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </div>
          </>
        )}
      </form>
    </main>
  );
};

export default Form;
