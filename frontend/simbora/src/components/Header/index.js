import React, { Component } from "react";
import logo from "../../assets/Logo.svg";
import Button from "../Button";
import { Link } from "react-router-dom";
import "./style.css";

export default class Header extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="header">
        <header>
          <Link to="/">
            <img src={logo} alt="Logo" width="210px" />
          </Link>

          <ul>
            <Link to="/">
              <li>Inicio</li>
            </Link>

            <Link to="/show-ideas">
              <li>Ideias</li>
            </Link>
            <Link to="/about-us">
              <li>Sobre nós</li>
            </Link>
          </ul>
          <Button text={this.props.status} link={this.props.link} />
        </header>
      </div>
    );
  }
}
