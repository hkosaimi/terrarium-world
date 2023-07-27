import "./Navbar.css";
import logo from "../../assets/tw2.png";
import { PiBag } from "react-icons/pi";
function Header() {
  let Menu = () => (
    <>
      <p>
        <a href="">Home</a>
      </p>
      <p>
        <a href="">About</a>
      </p>
      <p>
        <a href="">Contact</a>
      </p>
    </>
  );

  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <img src={logo} alt="" />
        </div>
        <div className="navbar__menu">
          <Menu />
        </div>
        <div className="navbar__bag">
          <PiBag />
        </div>
      </div>
    </>
  );
}

export default Header;
