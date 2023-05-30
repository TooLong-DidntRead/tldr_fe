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
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { tosLibrary } from "../../tosLibrary";
import Loading from "../Loading/Loading";
import Footer from "../Footer/Footer";
import ProcessHeader from "./ProcessHeader";
import ProcessForm from "./ProcessForm";

interface FormProps {
  tosInput: string;
  setTosInput: Dispatch<React.SetStateAction<string>>;
  setConcerns: Dispatch<React.SetStateAction<ConcernShape[] | null>>;
  setError: Dispatch<React.SetStateAction<string>>;
  user: number | null;
}

const Process = ({
  tosInput,
  setTosInput,
  setConcerns,
  setError,
  user,
}: FormProps) => {
  const [loading, setLoading] = useState(false);
  const [selectedLibrary, setSelectedLibrary] = useState("");
  const [concernAreas, setConcernAreas] = useState<{ [key: string]: boolean }>({
    Privacy: false,
    Security: false,
    Copyright: false,
    Liability: false,
    Cancellation: false,
    Payment: false,
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
    }
  };

  const getConcernCount = () => {
    const keys = Object.keys(concernAreas);
    return keys.reduce((acc, key) => {
      concernAreas[key] && acc++;
      return acc;
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
    setSelectedLibrary("");
    setTosInput(tos);
  };

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
      errorMessage ? setError(errorMessage) : setError("unexpected error 🙃");
    }
  };

  return (
    <main className="process-main">
      <ProcessHeader />
      {loading ? (
        <Loading
          concerns={Object.keys(concernAreas).filter(
            (key) => concernAreas[key]
          )}
        />
      ) : (
        <ProcessForm />
      )}
    </main>
  );
};

export default Process;
