import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const Header = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <button
        className="btn-menu"
        onClick={() => {
          setShowMenu(true);
        }}
      >
        <IoMenu className="btn-icon" />
      </button>
      <nav className={`container nav-box ${showMenu && "visible"}`}>
        <button
          className="btn"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          <IoClose className="btn-icon" />
        </button>
        <ul className="nav-list">
          <li className="get-app">
            <a href="#" className="nav-link">
              Get the App
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Investor Relations
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Add restaurant
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Log in
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              Sign up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
