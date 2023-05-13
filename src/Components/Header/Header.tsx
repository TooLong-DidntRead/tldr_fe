import "./Header.css";
import logo from "../../images/tldr_logo.svg";

const Header = () => {
  return (
    <nav className="navbar">
      <img className="logo-img" src={logo} alt="logo" />
    </nav>
  );
};

export default Header;
