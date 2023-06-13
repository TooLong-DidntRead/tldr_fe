import { Dispatch } from "react";
import { ConcernShape } from "../../../../interfaces";
import { processTOSPDF } from "../../../../apicalls";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import { UploadFile } from "@mui/icons-material";

interface Props {
  concernAreas: {[key: string]: boolean};
  setLoading: Dispatch<React.SetStateAction<boolean>>;
  setConcerns: Dispatch<React.SetStateAction<ConcernShape[] | null>>;
  setError: Dispatch<React.SetStateAction<string>>;
  user: number | null;
}

export const UploadButton = ({concernAreas, setLoading, setConcerns, user, setError}: Props) => {
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
  
  return(
    <>
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
          startIcon={<UploadFile />}>Upload</Button>
      </label>
    </>
  )
}
