import { useState } from "react";
import { LOGO_IMG } from "../utils/constants";
import { Link } from "react-router";

const Header = () => {

  const [btnNameReact,setBtnNameReact] = useState("Login")


  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_IMG}
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link className="header-link" to="/">Home</Link></li>
          <li><Link className="header-link" to="/about">About</Link></li>
          <li><Link className="header-link" to="/contact">Contact</Link></li>
          <li>Cart</li>
        </ul>
        <button className="btnLogin" onClick={()=>{
          btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
          console.log(btnNameReact)
        }}>{btnNameReact}</button>
      </div>
    </div>
  );
};

export default Header