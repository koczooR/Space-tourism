import logo from "../../assets/shared/logo.svg";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <header className="header">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "inactive")}>
              <span>00</span> HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="destination" className={({ isActive }) => (isActive ? "active" : "inactive")}>
              <span>01</span> DESTINATION
            </NavLink>
          </li>
          <li>
            <NavLink to="crew" className={({ isActive }) => (isActive ? "active" : "inactive")}>
              <span>02</span> CREW
            </NavLink>
          </li>
          <li>
            <NavLink to="technology" className={({ isActive }) => (isActive ? "active" : "inactive")}>
              <span>03</span> TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
