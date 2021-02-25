import React from "react";

import Aux from "../../../hoc/Aux/Aux";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.scss";

const navigationItems = ({ isAuthenticated }) => (
  <ul className={classes.NavigationItems}>
    {isAuthenticated && (
      <Aux>
        <NavigationItem link="/logout">Logout</NavigationItem>
      </Aux>
    )}
  </ul>
);

export default navigationItems;
