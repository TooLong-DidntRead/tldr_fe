import "./Form.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import processTOS from "../../apicalls";
import { Dispatch, useState } from "react";
import { ConcernShape } from "../../interfaces";
import { useHistory } from "react-router-dom";


interface FormProps {
  setConcerns: Dispatch<React.SetStateAction<ConcernShape[] | null>>;
  setError: Dispatch<React.SetStateAction<string>>;
  user: number | null;
}

const Form = ({ setConcerns, setError, user }: FormProps) => {
  const [tosInput, setTosInput] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(loading);

  const history = useHistory();

  const sendTOS = async () => {
    setLoading(true);
    const TOSinfo = await processTOS(tosInput, [], setError, user);
    setConcerns(TOSinfo.data);
    setLoading(false);
    history.push("/results");
  };

  return (
    <>
      <main className="main-content">
        <h1 className="heading">Terms of Service Processor</h1>
        <p className="sub-heading">Understand what's important to you.</p>
        <form className="form-card">
          <h3 className="form-heading">
            Paste, upload, or select your Terms of Service from a list of popular
            services.
          </h3>
          <TextField
            value={tosInput}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setTosInput(event.target.value);
            }}
            id="tos"
            multiline
            label="Enter TOS"
            rows={8}
          />
          <div className="form-footer">
            <Button
              onClick={sendTOS}
              color="primary"
              variant="contained"
              disableElevation
              startIcon={<CheckRoundedIcon />}
            >
              Process
            </Button>
            <Button
              color="primary"
              variant="outlined"
              startIcon={<UploadFileIcon />}
            >
              Upload
              <input hidden accept="image/*" multiple type="file" />
            </Button>
          </div>
        </form>
      </main>
    </>
  );
};

export default Form;
