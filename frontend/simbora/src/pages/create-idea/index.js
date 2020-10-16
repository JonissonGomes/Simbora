import React, { Component } from "react";
import Header from "../../components/Header";
import Forms from "../../components/forms";
import backAsset from "../../assets/back.svg";
import localAsset from "../../assets/Local.svg";
import remoteAsset from "../../assets/Remote.svg";
import "./style.css";

export default class CreateIdea extends Component {
  state = {
    type: "",
  };

  render() {
    return (
      <div>
        <Header status={"Voltar"} link={"/"} />
        <div className="forms-create-idea">
          {this.state.type === "" && (
            <section className="container-forms">
              <h3>Como as pessoas vão aproveitar a sua ideia?</h3>
              <section>
                <a
                  onClick={() => {
                    this.setState({ type: "local" });
                  }}
                >
                  <img
                    src={localAsset}
                    alt="Local-img"
                    width="150px"
                    height="147px"
                  />
                  <h4>Local</h4>
                </a>
                <a
                  onClick={() => {
                    this.setState({ type: "remoto" });
                  }}
                >
                  <img
                    src={remoteAsset}
                    alt="Local-img"
                    width="150px"
                    height="147px"
                  />
                  <h4>Remoto</h4>
                </a>
              </section>
            </section>
          )}

          {this.state.type === "local" && (
            <div className="forms-datas">
              <img
                src={backAsset}
                alt="back-Icon"
                width="40px"
                onClick={() => {
                  this.setState({ type: "" });
                }}
              />
              <Forms Status={true} />
            </div>
          )}
          {this.state.type === "remoto" && (
            <div className="forms-datas">
              <img
                src={backAsset}
                alt="back-Icon"
                width="40px"
                onClick={() => {
                  this.setState({ type: "" });
                }}
              />
              <Forms Status={false} />
            </div>
          )}
        </div>
      </div>
    );
  }
}
