import { useSelector } from "react-redux";
import { useState } from "react";
import Account from "../../components/Account/Account";
import Button from "../../components/Button/Button";
import Footer from "../../layout/Footer/Footer";
import MainNav from "../../layout/MainNav/MainNav";

import "../User/User.scss";

const User = () => {
  const firstname = useSelector((state) => state.user.firstname);
  const lastname = useSelector((state) => state.user.lastname);
  const username = useSelector((state) => state.user.username);

  const [editform, setEditForm] = useState(false);
  const handleEdit = (e) => {
    e.preventDefault();
    setEditForm(!editform);
  };

  return (
    <div>
      <MainNav />
      <main className="main bg-dark">
        <div className="header">
          {editform ? (
            <div className="user-info-content">
              <h1>Edit user info</h1>
              <form>
                <div className="input-wrapper-user">
                  <label htmlFor="user-name">User name:</label>
                  <input type="text" id="user-name" defaultValue={username} />
                </div>
                <div className="input-wrapper-user">
                  <label htmlFor="firstname">First name:</label>
                  <input
                    type="text"
                    id="firstname"
                    className="readonly"
                    value={firstname}
                    readOnly
                  />
                </div>
                <div className="input-wrapper-user">
                  <label htmlFor="lastname">Last name:</label>
                  <input
                    type="text"
                    id="lastname"
                    className="readonly"
                    value={lastname}
                    readOnly
                  />
                </div>
                <div className="container-buttons">
                  <Button textContain="Save" className="button-large" />
                  <Button
                    textContain="Cancel"
                    className="button-large"
                    onClick={handleEdit}
                  />
                </div>
              </form>
            </div>
          ) : (
            <>
              <h1>
                Welcome back
                <br />
                {firstname + " " + lastname}
              </h1>
              <Button
                className="edit-button"
                textContain="Edit Name"
                onClick={handleEdit}
              />
            </>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account />
      </main>
      <Footer />
    </div>
  );
};

export default User;
