import React from "react";

import classes from "./Button.module.scss";

const button = (props) => (
  <button
    type={props.type || "button"}
    disabled={props.disabled}
    className={[
      classes.Button,
      classes[props.btnType],
      ...[props.classes || []]
    ].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
