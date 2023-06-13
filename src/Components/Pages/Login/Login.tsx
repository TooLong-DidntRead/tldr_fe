import React from "react";
import Avatar1 from "../../../images/avatar-1.jpg";
import Avatar2 from "../../../images/avatar-2.jpg";
import Avatar3 from "../../../images/avatar-3.jpg";
import { UserSelector } from "./UserSelector";
import "./Login.css";

interface LoginProps {
  setUser: React.Dispatch<React.SetStateAction<number | null>>;
};

const Login = ({setUser}:LoginProps) => {
  return (
    <main className="login-main">
      <div className="login-card">
        <h3 className="login-heading">Please Select A User</h3>
        <div className="avatar-container">
          <UserSelector setUser={setUser} userID={1} src={Avatar1}/>
          <UserSelector setUser={setUser} userID={2} src={Avatar2}/>
          <UserSelector setUser={setUser} userID={3} src={Avatar3}/>
        </div>
      </div>
    </main>
  );
};

export default Login;
