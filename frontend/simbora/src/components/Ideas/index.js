import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import culinariaAsset from "../../assets/icon-culinaria.svg";
import saudeAsset from "../../assets/icon-saude.svg";
import festasAsset from "../../assets/icon-festas.svg";
import gamesAsset from "../../assets/icon-games.svg";
import infantilAsset from "../../assets/icon-infantil.svg";
import viagensAsset from "../../assets/icon-viagem.svg";
import Button from "../../components/Button";
import "./style.css";

export default class Ideas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tipo: this.props.city,
      ideas: [],
    };
  }

  componentDidMount() {
    this.loadIdeas();
    this.setCategories();
  }

  loadIdeas = async (categorie) => {
    if (categorie) {
      const { data } = await axios.get(
        `http://localhost:3333/ideas/${this.state.tipo}/${categorie}`
      );
      this.setState({ ideas: data });
      return;
    }

    const { data } = await axios.get(
      `http://localhost:3333/ideas/${this.state.tipo}`
    );
    this.setState({ ideas: data });
  };

  searchPerCategory() {
    const categoriesValue = document.querySelector("input[name=category]")
      .value;
    this.loadIdeas(categoriesValue);
  }

  setCategories() {
    const itemsToCollect = document.querySelectorAll(".categories-grid li");
    const collectedItems = document.querySelector("input[name = category]");
    var selectedItems = [];
    itemsToCollect.forEach((item) => {
      item.addEventListener("click", (event) => {
        const itemLi = event.target;

        itemLi.classList.toggle("selected");
        const ItemId = itemLi.dataset.id;

        const alreadySelected = selectedItems.findIndex((item) => {
          const itemFound = item === ItemId;
          return itemFound;
        });

        if (alreadySelected >= 0) {
          const filtedItems = selectedItems.filter((item) => {
            const itemIsDifferent = item != ItemId;
            return itemIsDifferent;
          });
          selectedItems = filtedItems;
        } else {
          selectedItems.push(ItemId);
        }

        collectedItems.value = selectedItems;
        this.searchPerCategory();
      });
    });
  }

  render() {
    return (
      <div className="ideas">
        <header className="cabecalho">
          <h1>Quadro de Ideias</h1>
          <h3>Buscando ideias?</h3>
          <h4>Confira algumas abaixo</h4>
        </header>

        <fieldset className="categories" id="categories">
          <legend>
            <h2>Categorias</h2>
          </legend>
          <div className="categories-grid" id="categories-grid">
            <li data-id="Culinária">
              <img src={culinariaAsset} alt="" />
              <span>Culinária</span>
            </li>
            <li data-id="Saúde e Bem-Estar">
              <img src={saudeAsset} alt="" />
              <span>Saúde e Bem-Estar</span>
            </li>
            <li data-id="Festas">
              <img src={festasAsset} alt="" />
              <span>Festas</span>
            </li>
            <li data-id="Games">
              <img src={gamesAsset} alt="" />
              <span>Games</span>
            </li>
            <li data-id="Infantil">
              <img src={infantilAsset} alt="" />
              <span>Infantil</span>
            </li>
            <li data-id="Viagens">
              <img src={viagensAsset} alt="" />
              <span>Viagens</span>
            </li>
          </div>
          <input type="hidden" name="category" />
        </fieldset>

        <section className="numberResults">
          <h2>{this.state.ideas.length} resultados encontrados</h2>
        </section>
        <div className="allIdeas">
          {this.state.ideas.reverse().map((ideas) => {
            return (
              <article key={ideas.title}>
                <img src={ideas.linkImg} alt="Idea-Image" className="img" />
                <div className="description-datas">
                  <h1>{ideas.title}</h1>
                  <p>{ideas.description.substring(0, 120)}...</p>
                  <p>
                    <strong>Categoria:</strong> {ideas.category}
                  </p>
                  <div>
                    <Button text={"Acessar Ideia"} link={`idea/${ideas.id}`} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    );
  }
}
