import { Avatar } from "@mui/material"
import { useHistory } from "react-router-dom";
import React, {KeyboardEvent} from "react";

interface Props {
  userID: number;
  setUser: React.Dispatch<React.SetStateAction<number | null>>;
  src: string;
}

export const UserSelector = ({userID, setUser, src}: Props) => {
  const history = useHistory();
  const names = ["Travis Howard", "Cindy Baker", "Remy Sharp"];

  const loginUser = (id:number) => {
    history.push("/process");
    setUser(userID);
  };

  const handleKeyPress = (event:KeyboardEvent, id:number): void => {
    if (event.key === "Enter") {
      loginUser(userID);
    };
  };

  return(
    <div className="avatar" >
      <Avatar onClick={() => loginUser(1)} onKeyDown={(event) => handleKeyPress(event, 1)} id="avatar-img" alt="Travis Howard" src={src} tabIndex={0}/>
      <p className="avatar-name">{names[userID-1]}</p>
    </div>
  )
}
