import "../MainNav/MainNav.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const MainNav = () => {
  const [connected, setconnected] = useState(false);

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
      </NavLink>
      <h1 className="sr-only">Argent Bank</h1>

      {connected ? (
        <div>
          <NavLink className="main-nav-item" to="/signin">
            <i className="fa fa-user-circle"></i>
            Tony
          </NavLink>
          <NavLink className="main-nav-item" to="/">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </NavLink>
        </div>
      ) : (
        <NavLink className="main-nav-item" to="/signin">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      )}
    </nav>
  );
};

export default MainNav;
