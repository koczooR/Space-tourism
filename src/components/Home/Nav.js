import logo from "../../assets/shared/logo.svg";
import { NavLink } from "react-router-dom";
import hamburgerMenu from "../../assets/shared/icon-hamburger.svg";
import closeMenu from "../../assets/shared/icon-close.svg";
import { useState } from "react";

export const Nav = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header className="header">
      <a href="/" className="logo">
        <img src={logo} alt="logo" />
      </a>
      <nav>
        <button className="hamburgerMenu" onClick={() => setIsExpanded(!isExpanded)}>
          <img src={isExpanded ? closeMenu : hamburgerMenu} alt="menu" />
        </button>
        <ul className={isExpanded ? "nav_menu expanded" : "nav_menu"}>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "inactive")} onClick={() => setIsExpanded(!isExpanded)}>
              <span>00</span> HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="destination" className={({ isActive }) => (isActive ? "active" : "inactive")} onClick={() => setIsExpanded(!isExpanded)}>
              <span>01</span> DESTINATION
            </NavLink>
          </li>
          <li>
            <NavLink to="crew" className={({ isActive }) => (isActive ? "active" : "inactive")} onClick={() => setIsExpanded(!isExpanded)}>
              <span>02</span> CREW
            </NavLink>
          </li>
          <li>
            <NavLink to="technology" className={({ isActive }) => (isActive ? "active" : "inactive")} onClick={() => setIsExpanded(!isExpanded)}>
              <span>03</span> TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
