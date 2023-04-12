import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import s from "./styles.module.scss";

const Button = (props) => {
  const {
    style = {},
    url = "",
    center = false,
    disabled = false,
    onClick = () => {},
    children,
  } = props;

  return (
    <div
      className={clsx(s.button_wrapper, { [s.center]: center })}
      style={style}
    >
      {url ? (
        <Link to={url} className={s.button}>
          {children}
        </Link>
      ) : (
        <button className={s.button} disabled={disabled} onClick={onClick}>
          {children}
        </button>
      )}
    </div>
  );
};

export default Button;
