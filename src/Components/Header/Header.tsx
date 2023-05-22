import "./Header.css";
import logo_sm from "../../images/tldr_sm_dark.svg";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import Avatar1 from "../../images/avatar-1.jpg";
import Avatar2 from "../../images/avatar-2.jpg";
import Avatar3 from "../../images/avatar-3.jpg";

interface HeaderProps {
  user: number | null;
  logout: () => void;
};

const avatars = [Avatar1, Avatar2, Avatar3];

const Header = ({user, logout}: HeaderProps) => {

  return (
    <header>
      <Link to="/process">
        <img className="logo-img" src={logo_sm} alt="logo" />
      </Link>
      <div className="user-div">
        <IconButton aria-label="delete" onClick={logout}>
            <LogoutIcon />
        </IconButton>
        <Avatar alt="User icon" src={user ? avatars[user-1] : ''} />
      </div>
    </header>
  );
};

export default Header;
