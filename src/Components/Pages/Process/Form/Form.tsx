import { Dispatch, useState } from "react";
import { ConcernShape } from "../../../../interfaces";
import { FormTitle } from "./FormTitle";
import { TOSInput } from "./TOSInput";
import { ConcersSelector } from "./ConcernsSelector";
import { TOSLibrary } from "./TOSLibrary";
import { ProcessButton } from "./ProcessButton";
import { UploadButton } from "./UploadButton";

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

  return (
    <form className="form-card">
      <FormTitle />
      <TOSInput setSelectedLibrary={setSelectedLibrary} setTosInput={setTosInput} tosInput={tosInput}/>
      <ConcersSelector concernAreas={concernAreas} setConcernAreas={setConcernAreas}/>
      <div className="form-footer">
        <TOSLibrary selectedLibrary={selectedLibrary} setSelectedLibrary={setSelectedLibrary} setTosInput={setTosInput}/>
        <div className="buttons-parent">
          <ProcessButton concernAreas={concernAreas} setError={setError} setConcerns={setConcerns} setLoading={setLoading} tosInput={tosInput} user={user}/>
          <UploadButton concernAreas={concernAreas} setConcerns={setConcerns} setError={setError} setLoading={setLoading} user={user}/>
        </div>
      </div>
    </form>
  )
}
