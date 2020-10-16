import React, { Component } from "react";
import Header from "../../components/Header";
import Modal from "../../components/ModalChoseCategory";
import Ideas from "../../components/Ideas";
import backAsset from "../../assets/back.svg";
import "./style.css";

export default class ShowIdeas extends Component {
  state = {
    city: "",
    mode: "",
  };

  onChildChanged(city, mode) {
    this.setState({ city: city, mode: mode });
  }

  render() {
    return (
      <>
        <Header status={"Nova Ideia"} link={"/create-idea"} />

        {this.state.mode === "" && (
          <Modal
            callbackParent={(city, mode) => {
              this.onChildChanged(city, mode);
            }}
          />
        )}
        {this.state.mode === "remoto" && (
          <div>
            <div
              id="back"
              onClick={() => {
                this.setState({ mode: "" });
              }}
            >
              <img src={backAsset} alt="Icon-back" />
            </div>
            <Ideas city="remoto" />
          </div>
        )}

        {this.state.mode === "local" && (
          <div>
            <div
              id="back"
              onClick={() => {
                this.setState({ mode: "" });
              }}
            >
              <img src={backAsset} alt="Icon-back" />
            </div>
            <Ideas city={this.state.city} />
          </div>
        )}
      </>
    );
  }
}
