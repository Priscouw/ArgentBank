import Account from "../../components/Account/Account";
import Button from "../../components/Button/Button";
import Footer from "../../layout/Footer/Footer";
import MainNav from "../../layout/MainNav/MainNav";

import "../User/User.scss";

const User = () => {
  return (
    <div>
      <MainNav />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <Button className="edit-button" textContain="Edit Name" />
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account />
      </main>
      <Footer />
    </div>
  );
};

export default User;
