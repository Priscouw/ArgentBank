import MainNav from "../../layout/MainNav/MainNav";
import Button from "../../components/Button/Button";
import Footer from "../../layout/Footer/Footer";

import "../Sign-in/Sign-in.scss";

const SignIn = () => {
  return (
    <>
      <MainNav />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <Button textContain="Sign In" className="sign-in-button"></Button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SignIn;
