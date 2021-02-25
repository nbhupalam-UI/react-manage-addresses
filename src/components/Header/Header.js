import React from "react";

import classes from "./Header.module.css";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";

const header = ({ isAuth }) => (
  <header className={classes.Header}>
    <p className={classes.Title}>HEADER</p>
    <nav>
      <NavigationItems isAuthenticated={isAuth} />
    </nav>
  </header>
);

export default header;
