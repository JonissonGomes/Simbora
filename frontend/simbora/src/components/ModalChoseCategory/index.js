import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import localAsset from "../../assets/Local.svg";
import remoteAsset from "../../assets/Remote.svg";
import kite from "../../assets/kite.svg";
import back from "../../assets/back.svg";
import "./style.css";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remoteSelected: false,
    };
  }

  async Populate() {
    const ufSelect = document.querySelector("#uf");
    const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
    const states = await axios.get(url);
    const dados = states.data;
    dados.map((item) => {
      return (ufSelect.innerHTML += `<option value = ${"'" + item.nome + "'"}>${
        item.nome
      }</option>`);
    });
  }
  render() {
    return (
      <div id="abrirModal" className="modal">
        {!this.state.remoteSelected && (
          <section className="Container-botoes">
            <h3>Onde você quer se divertir?</h3>
            <section>
              <Link
                to="/show-ideas"
                href="#"
                onClick={() => {
                  this.setState({ remoteSelected: true });
                }}
              >
                <img
                  src={localAsset}
                  alt="Local-img"
                  width="200px"
                  height="147px"
                />
                <h4>Local</h4>
              </Link>
              <a
                href="#"
                onClick={() => {
                  this.props.callbackParent("", "remoto");
                }}
              >
                <img src={remoteAsset} alt="Local-img" width="200px" />
                <h4>Remoto</h4>
              </a>
            </section>
          </section>
        )}
        {this.state.remoteSelected && (
          <section onLoad={this.Populate} className="ChoseCity">
            <div
              className="back"
              onClick={() => {
                this.setState({ remoteSelected: false });
              }}
            >
              <img src={back} alt="back-icon" width="30px" />
            </div>
            <div className="header">
              <h1>Ideias próximas de você</h1>
            </div>
            <div className="forms">
              <label>Estado</label>
              <div>
                <select name="uf" id="uf" required>
                  <option value="">Selecione o Estado</option>
                </select>
                <input type="hidden" name="state" />
                <Link
                  onClick={() => {
                    const select = document.querySelector("select[name=uf]");
                    this.props.callbackParent(select.value, "local");
                  }}
                  to="/show-ideas"
                >
                  <img src={kite} alt="Buscar" width="35px" />
                </Link>
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }
}
