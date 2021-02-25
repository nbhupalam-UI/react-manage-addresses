import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.scss";

const navigationItems = ({ isAuthenticated }) => (
  <ul className={classes.NavigationItems}>
    {isAuthenticated && <NavigationItem link="/logout">Logout</NavigationItem>}
  </ul>
);

export default navigationItems;
