import React from "react";
import { Link } from "react-router-dom";
import kite from "../../assets/kite.svg";
import "./style.css";

const Button = (props) => {
  return (
    <Link to={props.link} className="button">
      <span className="dark">
        <img src={kite} alt="kite icon" />
      </span>
      <p>{props.text}</p>
    </Link>
  );
};

export default Button;
