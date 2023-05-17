import "./Form.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import processTOS from "../../apicalls";
import { Dispatch, useState } from "react";
import { ConcernsShape } from "../../interfaces";

interface FormProps {
  setConcerns: Dispatch<React.SetStateAction<ConcernsShape | null>>;
  setError: Dispatch<React.SetStateAction<string>>;
}

const Form = ({ setConcerns, setError }: FormProps) => {
  const [tosInput, setTosInput] = useState("");

  const sendTOS = async () => {
    const TOSinfo = await processTOS(tosInput, [], setError);
    setConcerns(TOSinfo.data.concerns);
  };

  return (
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
  );
};

export default Form;
