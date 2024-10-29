import Account from "../../components/Account/Account";
import Button from "../../components/Button/Button";
import Footer from "../../layout/Footer/Footer";
import MainNav from "../../layout/MainNav/MainNav";

import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";

import { editUsername } from "../../api";

import "./User.scss";

const User = () => {
  // Récupération des infos via le store redux
  const firstname = useSelector((state) => state.user.firstname);
  const lastname = useSelector((state) => state.user.lastname);
  const username = useSelector((state) => state.user.username);
  const token = useSelector((state) => state.login.token);

  const [editform, setEditForm] = useState(false);
  const usernameRef = useRef(username);

  const dispatch = useDispatch();

  // Bouton Cancel
  const handleCancel = (e) => {
    e.preventDefault();
    setEditForm(!editform);
  };

  // Bouton Save
  const handleEditUsername = (e) => {
    const newUsername = usernameRef.current.value;
    e.preventDefault();
    editUsername(newUsername, token, dispatch);
    setEditForm(false);
  };

  return (
    <div>
      <MainNav />
      <main className="main bg-dark">
        <div className="header">
          {editform ? (
            <div className="user-info-content">
              <h1>Edit user info</h1>
              <form onSubmit={handleEditUsername}>
                <div className="input-wrapper-user">
                  <label htmlFor="username">User name:</label>
                  <input
                    type="text"
                    id="username"
                    defaultValue={username}
                    ref={usernameRef}
                  />
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
                    onClick={handleCancel}
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
                onClick={handleCancel}
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
