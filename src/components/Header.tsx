const Header = (): JSX.Element => {
  return (
    <header className="header">
      <nav className="container">
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
