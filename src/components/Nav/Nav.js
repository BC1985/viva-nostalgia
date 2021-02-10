import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Nav.css";
function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="nav">
      <ul
        className={isNavOpen ? "nav-links open" : "nav-links"}
        onClick={openNav}
      >
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/shop"}>
          <li>Store</li>
        </Link>
        <Link to={"/menu"}>
          <li>Coffee</li>
        </Link>

        <li>Music</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Nav;
