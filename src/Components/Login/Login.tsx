import React, {KeyboardEvent} from "react";
import "./Login.css";
import Avatar1 from "../../images/avatar-1.jpg";
import Avatar2 from "../../images/avatar-2.jpg";
import Avatar3 from "../../images/avatar-3.jpg";
import Avatar from "@mui/material/Avatar";
import { useHistory } from "react-router-dom";

interface LoginProps {
  setUser: React.Dispatch<React.SetStateAction<number | null>>
}


const Login = ({setUser}:LoginProps) => {
  let history = useHistory();

  const loginUser = (id:number) => {
    history.push("/process")
    setUser(id)
  }

  const handleKeyPress = (event:KeyboardEvent, id:number): void => {
    console.log(event.key)
    if (event.key === "Enter") {
      loginUser(id)
    }
  }

  return (
    <main className="login-main">
      <div className="login-card">
        <h3 className="login-heading">Please Select A User</h3>
        <div className="avatar-container">
          <div className="avatar" >
            <Avatar onClick={() => loginUser(1)} onKeyDown={(event) => handleKeyPress(event, 1)} id="avatar-img" alt="Travis Howard" src={Avatar1} tabIndex={0}/>
            <p className="avatar-name">Travis Howard</p>
          </div>
          <div className="avatar">
            <Avatar onClick={() => loginUser(2)} onKeyDown={(event) => handleKeyPress(event, 2)}id="avatar-img" alt="Cindy Baker" src={Avatar2} tabIndex={0}/>
            <p className="avatar-name">Cindy Baker</p>
          </div>
          <div className="avatar">
            <Avatar onClick={() => loginUser(3)} onKeyDown={(event) => handleKeyPress(event, 3)}id="avatar-img" alt="Remy Sharp" src={Avatar3} tabIndex={0}/>
            <p className="avatar-name">Remy Sharp</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
