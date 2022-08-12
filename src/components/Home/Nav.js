import logo from "../../assets/shared/logo.svg";

export const Nav = () => {
  return (
    <header className="header">
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <nav>
        <ul>
          <li>
            <a href="/">
              <span>00</span> HOME
            </a>
          </li>
          <li>
            <a href="/destination">
              <span>01</span> DESTINATION
            </a>
          </li>
          <li>
            <a href="/crew">
              <span>02</span> CREW
            </a>
          </li>
          <li>
            <a href="/technology">
              <span>03</span> TECHNOLOGY
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
