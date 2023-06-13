import "./Process.css";
import { Dispatch, useState } from "react";
import { ConcernShape } from "../../../interfaces";
import Loading from "./Loading/Loading";
import { Form } from "./Form/Form";
import { ProcessTitle } from "./ProcessTitle";

interface Props {
  tosInput: string;
  setTosInput: Dispatch<React.SetStateAction<string>>;
  setConcerns: Dispatch<React.SetStateAction<ConcernShape[] | null>>;
  setError: Dispatch<React.SetStateAction<string>>;
  user: number | null;
}

const Process = ({tosInput, setTosInput, setConcerns, setError, user}: Props) => {
  const [loading, setLoading] = useState(false);
  const [concernAreas, setConcernAreas] = useState<{ [key: string]: boolean }>({
    Privacy: false,
    Security: false,
    Copyright: false,
    Liability: false,
    Cancellation: false,
    Payment: false
  });

  return (
    <main className="process-main">
      <ProcessTitle />
      {loading ? 
        <Loading concerns={Object.keys(concernAreas).filter(key => concernAreas[key])}/>: 
        <Form 
          concernAreas={concernAreas}
          setConcernAreas={setConcernAreas}
          setConcerns={setConcerns}
          setError={setError}
          setLoading={setLoading}
          setTosInput={setTosInput}
          tosInput={tosInput}
          user={user}
        />}
    </main>
  );
};

export default Process;
