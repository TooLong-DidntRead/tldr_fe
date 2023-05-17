import "./Login.css";
import Avatar1 from "../../images/avatar-1.jpg";
import Avatar2 from "../../images/avatar-2.jpg";
import Avatar3 from "../../images/avatar-3.jpg";
import Avatar from "@mui/material/Avatar";

const Login = () => {
  return (
    <div className="login-container">
      <div className="avatar">
        <Avatar alt="Travis Howard" src={Avatar1} />
        <p>Travis Howard</p>
      </div>
      <div className="avatar">
        <Avatar alt="Travis Howard" src={Avatar1} />
        <p>Travis Howard</p>
      </div>
      <div className="avatar">
        <Avatar alt="Travis Howard" src={Avatar1} />
        <p>Travis Howard</p>
      </div>
    </div>
  );
};

export default Login;
