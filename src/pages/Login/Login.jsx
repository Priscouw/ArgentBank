import MainNav from "../../layout/MainNav/MainNav";
import Button from "../../components/Button/Button";
import Footer from "../../layout/Footer/Footer";

import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../features/loginSlice";

import "./Login.scss";

export const Login = () => {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(false);

  // usestate pour case à cocher
  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  const form = useRef(null);
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();

    if (form.current) {
      // Utilisation de form.current.elements pour accéder aux champs
      const email = form.current.elements.username.value;
      const password = form.current.elements.password.value;

      const postData = {
        email,
        password,
      };

      fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            setErrorMessage(!errorMessage);
            console.log("données non valide");
          }
        })
        .then((data) => {
          if (data.body.token) {
            dispatch(login(postData));
            const token = data.body.token;

            if (isChecked === true) {
              window.localStorage.setItem("tokenlocal", token);
              console.log("Je suis connecté au local");
            } else {
              window.sessionStorage.setItem("tokensession", token);
              console.log("je suis connecté à la session");
            }
            navigate("/user");
          }
        })
        .catch((error) => {
          console.error("Erreur lors de la connexion:", error);
        });
    }
  };

  return (
    <>
      <MainNav />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form ref={form} onSubmit={handleForm}>
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
