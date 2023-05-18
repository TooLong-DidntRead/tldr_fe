import "./Header.css";
import logo_sm from "../../images/tldr_sm_dark.svg";
import UserIcon from "../../images/user.jpeg";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";

interface HeaderProps {
  logout: () => void
}

const Header = ({logout}: HeaderProps) => {
  return (
    <header>
      <Link to="/process">
        <img className="logo-img" src={logo_sm} alt="logo" />
      </Link>
      <div className="user-div">
        <IconButton aria-label="delete" onClick={logout}>
            <LogoutIcon />
        </IconButton>
        <Avatar alt="Remy Sharp" src={UserIcon} />
      </div>
    </header>
  );
};

export default Header;
