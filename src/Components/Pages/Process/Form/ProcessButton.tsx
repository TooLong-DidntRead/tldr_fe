import { CheckRounded } from "@mui/icons-material"
import { Button } from "@mui/material"
import { Dispatch } from "react";
import { ConcernShape } from "../../../../interfaces";
import processTOS from "../../../../apicalls";
import { useHistory } from "react-router-dom";

interface Props {
  tosInput: string;
  concernAreas: {[key: string]: boolean};
  setLoading: Dispatch<React.SetStateAction<boolean>>;
  setConcerns: Dispatch<React.SetStateAction<ConcernShape[] | null>>;
  setError: Dispatch<React.SetStateAction<string>>;
  user: number | null;
}

export const ProcessButton = ({tosInput, concernAreas, setLoading, setConcerns, user, setError}: Props) => {
  const history = useHistory();

  const getConcernCount = () => {
    const keys = Object.keys(concernAreas);
    return keys.reduce((acc, key) => {
      concernAreas[key] && acc++;
      return acc ;
    }, 0);
  };

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

  return(
    <Button
      disabled={!(tosInput && getConcernCount())}
      onClick={sendTOS}
      color="primary"
      variant="contained"
      disableElevation
      startIcon={<CheckRounded />}>Process
    </Button>
  )
}
