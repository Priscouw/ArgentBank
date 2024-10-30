import "../MainNav/MainNav.scss";

import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../../features/loginSlice";
import { remove_infos } from "../../features/userSlice";

import { getInfos } from "../../api";

const MainNav = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.login.token);
  const userName = useSelector((state) => state.user.username);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(remove_infos());
  };

  useEffect(() => {
    if (token && !userName) {
      getInfos(token, dispatch);
    }
  }, [token, userName, dispatch]);

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

      {token ? (
        <div>
          <NavLink className="main-nav-item" to="/user">
            <i className="fa fa-user-circle icon"></i>
            {userName}
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
