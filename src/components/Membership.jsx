import React from "react";
import classes from "./Membership.module.scss";

const Membership = () => {
  return (
    <div className={classes.membership}>
      <h4>
        Ready to watch? Enter your email to create or restart your membership.
      </h4>
      <div className={classes.membership__input}>
        <form action="">
          <input type="email" placeholder="Email Address" />
          <button className={classes.membership__getStarted}>
            GET STARTED
          </button>
        </form>
      </div>
    </div>
  );
};

export default Membership;
