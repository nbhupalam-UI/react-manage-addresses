import React from "react";
import { connect } from "react-redux";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Footer from "../../components/Footer/Footer";
import classes from "./Layout.module.scss";

const Layout = ({ isAuthenticated, children }) => {
  return (
    <div className={classes.Layout}>
      <Header isAuth={isAuthenticated} />
      <div className={classes.Content}>
        {isAuthenticated && <Sidebar />}
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(Layout);
