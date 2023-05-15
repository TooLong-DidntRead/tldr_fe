import "./Header.css";
import logo_sm from "../../images/tldr_sm_dark.svg";
import UserIcon from "../../images/user.jpeg";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
  return (
    <header>
      <img className="logo-img" src={logo_sm} alt="logo" />
      <div className="user-div">
        <IconButton aria-label="delete">
            <LogoutIcon />
        </IconButton>
        <Avatar alt="Remy Sharp" src={UserIcon} />
      </div>
    </header>
  );
};

export default Header;
