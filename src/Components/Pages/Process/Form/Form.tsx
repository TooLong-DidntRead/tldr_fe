import { Dispatch, useState } from "react";
import { useHistory } from "react-router-dom";
import { ConcernShape } from "../../../../interfaces";
import processTOS, { processTOSPDF } from "../../../../apicalls";
import Button from "@mui/material/Button";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { FormTitle } from "./FormTitle";
import { TOSInput } from "./TOSInput";
import { ConcersSelector } from "./ConcernsSelector";
import { TOSLibrary } from "./TOSLibrary";
import { ProcessButton } from "./ProcessButton";

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

  const getConcernCount = () => {
    const keys = Object.keys(concernAreas);
    return keys.reduce((acc, key) => {
      concernAreas[key] && acc++;
      return acc ;
    }, 0);
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
      <FormTitle />
      <TOSInput setSelectedLibrary={setSelectedLibrary} setTosInput={setTosInput} tosInput={tosInput}/>
      <ConcersSelector concernAreas={concernAreas} setConcernAreas={setConcernAreas}/>
      <div className="form-footer">
        <TOSLibrary selectedLibrary={selectedLibrary} setSelectedLibrary={setSelectedLibrary} setTosInput={setTosInput}/>
        <div className="buttons-parent">
          <ProcessButton concernAreas={concernAreas} setError={setError} setConcerns={setConcerns} setLoading={setLoading} tosInput={tosInput} user={user}/>
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
