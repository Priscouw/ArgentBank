import MainNav from "../../layout/MainNav/MainNav";
import Button from "../../components/Button/Button";
import Footer from "../../layout/Footer/Footer";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getInfos, postLogin } from "../../api";

import "./Login.scss";

export const Login = () => {
  const token = useSelector((state) => state.login.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(false);

  // usestate pour case à cocher
  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  const form = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();

    if (form.current) {
      // Utilisation de form.current.elements pour accéder aux champs
      const email = form.current.elements.username.value;
      const password = form.current.elements.password.value;

      const postData = {
        email,
        password,
      };

      postLogin(postData, setErrorMessage, dispatch, navigate);
    }
  };

  if (token) {
    getInfos(token, dispatch);
  }
  return (
    <>
      <MainNav />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form ref={form} onSubmit={handleLogin}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="email" id="username" required />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required />
            </div>
            {errorMessage && (
              <p className="errorMessage">
                The username or password is incorrect
              </p>
            )}
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={isChecked}
                onChange={checkHandler}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <Button textContain="Sign In" className="sign-in-button" />
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Login;
