import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import axios from "axios";
import backAsset from "../../assets/back.svg";
import "./style.css";

export default class Idea extends Component {
  state = {
    idea: [],
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await axios.get(`http://localhost:3333/ideas/id/${id}`);

    this.setState({ idea: response.data });
  }

  render() {
    const { idea } = this.state;
    return (
      <>
        <Header status={"Nova Ideia"} link={"/create-idea"} />
        <div className="idea-info">
          <header>
            <Link to="/show-ideas" className="back">
              <img src={backAsset} alt="back-icon" />
            </Link>
          </header>
          {idea.map((item) => {
            return (
              <div className="complete-idea">
                <img src={item.linkImg} alt="img" />
                <div className="description-idea">
                  <h1>{item.title}</h1>

                  <p>{item.description}</p>
                  {item.state !== "Null" && (
                    <>
                      <p>
                        <span>Estado: </span>
                        {item.state}
                      </p>
                      <p>
                        <span>Cidade: </span> {item.city}
                      </p>
                      <p>
                        <span>Endereço: </span>
                        {item.address}
                      </p>
                    </>
                  )}
                  {item.linkMoreDetails !== "Null" && (
                    <>
                      <p>
                        <span>Link para mais detalhes: </span>
                        {item.linkMoreDetails}
                      </p>
                    </>
                  )}
                  <p>
                    <span>Categoria: </span>
                    {item.category}
                  </p>
                  <p>
                    <span>Ideia sugerida por: </span>
                    {item.author}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
