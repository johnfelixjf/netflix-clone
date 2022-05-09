import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./NavBar.module.scss";
import logo from "../images/logo.png";

const NavBar = () => {
  const [show, setShow] = useState(false);

  // const history = useNavigate();
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`${classes.navbar} ${show && classes.nav__black}`}>
      <div className={classes.nav__contents}>
        <img onClick={() => navigate("/")} className={classes.nav__logo} src={logo} alt="" />
        <img
        onClick={() => navigate("/profile")}
          className={classes.nav__avatar}
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default NavBar;
