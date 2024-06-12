import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnllineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus=useOnlineStatus()

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status:{onlineStatus?'🟢':'🛑'}
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
          <button
            className="btnLogin"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
