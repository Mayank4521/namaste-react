import { useEffect, useState } from "react";
import { LOGO_IMG } from "../utils/constants";

const Header = () => {

  const [btnNameReact,setBtnNameReact] = useState("Login")

  useEffect(()=>{
    console.log("useEffect called")
  },[])

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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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