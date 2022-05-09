import React, { useEffect, useState } from "react";
import classes from "./LoginScreen.module.scss";
import SignupScreen from "./SignupScreen";
import Feature from "../components/Feature";
import AccordionCompound from "../components/AccordionCompound";
import datas from "../data/data.json";
import Membership from "../components/Membership";
import logo from "../images/logo.png";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  // ----------------------

  const [show, setShow] = useState(false);
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

  // ---------------------

  return (
    <div className={classes.loginScreen}>
      <div className={classes.loginScreen__hero}>
        <div className={classes.loginScreen__background}>
          
          {/* Navbar */}
          <div className={`${classes.navbar} ${show && classes.nav__black}`}>
            <div className={classes.nav__contents}>
              <img 
              onClick={() => setSignIn(false)}
              className={classes.nav__logo} src={logo} alt="" />
              <button onClick={() => setSignIn(true)} className={classes.loginScreen__button}>Sign in</button>
            </div>
          </div>
          {/*  */}

          <div className={classes.loginScreen__gradient} />
        </div>

        <div className={classes.loginScreen__body}>
          {signIn ? (
            <SignupScreen />
          ) : (
            <>
              <h1>Unlimited movies, TV shows and more.</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className={classes.loginScreen__input}>
                <form action="">
                  <input type="email" placeholder="Email Address" />
                  <button
                    onClick={() => setSignIn(true)}
                    className={classes.loginScreen__getStarted}
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>

      {!signIn ? (
        <div className={classes.loginScreen__feature}>
          {datas.map((data) => (
            <div>
              <Feature
                key={data.id}
                title={data.title}
                subTitle={data.subTitle}
                image={data.image}
                alt={data.alt}
              />
            </div>
          ))}
          <AccordionCompound />
          <Membership />
        </div>
      ) : null}
    </div>
  );
};

export default LoginScreen;
