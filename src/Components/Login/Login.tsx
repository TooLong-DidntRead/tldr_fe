import "./Login.css";
import Avatar1 from "../../images/avatar-1.jpg";
import Avatar2 from "../../images/avatar-2.jpg";
import Avatar3 from "../../images/avatar-3.jpg";
import Avatar from "@mui/material/Avatar";

const Login = () => {
  return (
    <div className="login-container">
      <h3 className="login-heading">Please Select A User</h3>
      <div className="avatar-container">
        <div className="avatar">
          <Avatar id="avatar-img" alt="Travis Howard" src={Avatar1} />
          <p className="avatar-name">Travis Howard</p>
        </div>
        <div className="avatar">
          <Avatar id="avatar-img" alt="Cindy Baker" src={Avatar2} />
          <p className="avatar-name">Cindy Baker</p>
        </div>
        <div className="avatar">
          <Avatar id="avatar-img" alt="Remy Sharp" src={Avatar3} />
          <p className="avatar-name">Remy Sharp</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
