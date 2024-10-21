import { logout } from "../../features/loginSlice";
import { useDispatch } from "react-redux";
import "../MainNav/MainNav.scss";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const MainNav = () => {
  const dispatch = useDispatch();

  // Partie token
  const [tokenSaveLocal, setTokenSaveLocal] = useState(null);
  const [tokenSaveSession, setTokenSaveSession] = useState(null);

  useEffect(() => {
    let tokenLocal = localStorage.getItem("tokenlocal");
    let tokenSession = sessionStorage.getItem("tokensession");

    setTokenSaveLocal(tokenLocal);
    setTokenSaveSession(tokenSession);
  }, []);

  const handleLogout = () => {
    const removetokenSavelocal = () => localStorage.removeItem("tokenlocal");
    const removetokenSaveSession = () =>
      sessionStorage.removeItem("tokensession");

    setTokenSaveLocal(removetokenSavelocal);
    setTokenSaveSession(removetokenSaveSession);
    dispatch(logout());
  };

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

      {tokenSaveLocal || tokenSaveSession ? (
        <div>
          <NavLink className="main-nav-item" to="/user">
            <i className="fa fa-user-circle icon"></i>
            Tony
          </NavLink>
          <NavLink className="main-nav-item" to="/" onClick={handleLogout}>
            <i className="fa fa-sign-out icon"></i>
            Sign Out
          </NavLink>
        </div>
      ) : (
        <NavLink className="main-nav-item" to="/login">
          <i className="fa fa-user-circle icon"></i>
          Sign In
        </NavLink>
      )}
    </nav>
  );
};

export default MainNav;
