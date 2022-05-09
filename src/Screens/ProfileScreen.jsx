import React from "react";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import { selectUser } from "../features/userSlice";
import classes from "./ProfileScreen.module.scss";

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  return (
    <div className={classes.profileScreen}>
      <NavBar />
      <div className={classes.profileScreen__body}>
        <h1>Edit Profile</h1>
        <div className={classes.profileScreen__info}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className={classes.profileScreen__details}>
            <h2>{user.email}</h2>
            <div className={classes.profileScreen__plans}>
              <h3>Plans</h3>
              <button
                onClick={() => auth.signOut()}
                className={classes.profileScreen__signOut}
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
