import MainNav from "../../layout/MainNav/MainNav";
import Button from "../../components/Button/Button";
import Footer from "../../layout/Footer/Footer";

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { postLogin } from "../../api";

import "./Login.scss";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(false);

  const form = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();

    if (form.current) {
      // Utilisation de form.current.elements pour accéder aux champs
      const email = form.current.elements.email.value;
      const password = form.current.elements.password.value;

      const postData = {
        email,
        password,
      };

      postLogin(postData, setErrorMessage, dispatch, navigate);
    }
  };

  return (
    <>
      <MainNav />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form ref={form} onSubmit={handleLogin}>
            <div className="input-wrapper">
              <label htmlFor="email">Username</label>
              <input type="email" id="email" required />
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
              <input type="checkbox" id="remember-me" />
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
